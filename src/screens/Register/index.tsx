import React, { useState } from "react";
import { useForm, FieldValues } from "react-hook-form";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import AsyncStorage from "@react-native-async-storage/async-storage";

import uuid from "react-native-uuid";
import { Keyboard, Modal, TouchableWithoutFeedback, Alert } from "react-native";

import { yupResolver } from "@hookform/resolvers/yup";

import { Button } from "../../components/Form/Button";
import { CategorySelectButton } from "../../components/Form/CategorySelectButton";
import { InputForm } from "../../components/Form/InputForm";
import { TransactionTypeButton } from "../../components/Form/TransactionTypeButton";
import { CategorySelect } from "../CategorySelect";
import { AppTabParamList } from "../../routes/app.routes";

import {
  Container,
  Fields,
  Form,
  Header,
  Title,
  TransactionsTypes,
} from "./styles";

import { RegisterSchema } from "./schema";

type ScreenProps = BottomTabScreenProps<AppTabParamList, "Cadastrar">;

export function Register({ navigation }: ScreenProps) {
  const [transactionType, setTransactionType] = useState("");
  const [categoryModalOpen, setCategoryModalOpen] = useState(false);

  const dataKey = "@gofinances:transactions";

  const [category, setCategory] = useState({
    key: "category",
    name: "Categoria",
    icon: "list",
  });

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(RegisterSchema),
  });

  async function handleRegister(form: FieldValues) {
    if (!transactionType) {
      return Alert.alert("Selecione o tipo da transação");
    }

    if (category.key === "category") {
      return Alert.alert("Selecione a categoria");
    }

    const newTransaction = {
      id: String(uuid.v4()),
      name: form.name,
      amount: form.amount,
      type: transactionType,
      category: category.key,
      date: new Date(),
    };

    try {
      const data = await AsyncStorage.getItem(dataKey);
      const currentData = data ? JSON.parse(data) : [];

      const dataFormatted = [...currentData, newTransaction];

      await AsyncStorage.setItem(dataKey, JSON.stringify(dataFormatted));

      reset();
      setTransactionType("");
      setCategory({
        key: "categoy",
        name: "Categoria",
        icon: "list",
      });
      navigation.navigate("Listagem");
    } catch (error) {
      Alert.alert("Não foi possível salvar");
      console.log(error);
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header>
          <Title>Cadastro</Title>
        </Header>

        <Form>
          <Fields>
            <InputForm
              name="name"
              control={control}
              placeholder="Nome"
              autoCapitalize="sentences"
              autoCorrect={false}
              error={errors?.name && errors.name.message}
            />
            <InputForm
              name="amount"
              control={control}
              placeholder="Preço"
              keyboardType="numeric"
              error={errors?.amount && errors.amount.message}
            />

            <TransactionsTypes>
              <TransactionTypeButton
                type="up"
                isActive={transactionType === "positive"}
                title="Income"
                onPress={() => setTransactionType("positive")}
              />
              <TransactionTypeButton
                type="down"
                isActive={transactionType === "negative"}
                title="Outcome"
                onPress={() => setTransactionType("negative")}
              />
            </TransactionsTypes>

            <CategorySelectButton
              title={category.name}
              icon={category.icon}
              onPress={() => setCategoryModalOpen(true)}
            />
          </Fields>
          <Button title="Enviar" onPress={handleSubmit(handleRegister)} />
        </Form>

        <Modal visible={categoryModalOpen}>
          <CategorySelect
            category={category}
            setCategory={setCategory}
            closeSelectCategory={() => setCategoryModalOpen(false)}
          />
        </Modal>
      </Container>
    </TouchableWithoutFeedback>
  );
}
