import React from "react";
import {
  Container,
  Category,
  IconMaterial,
  CategorySelected,
  IconFeather,
} from "./styles";
import { TouchableOpacityProps } from "react-native";

interface Props extends TouchableOpacityProps {
  title: string;
  icon?: string;
}

export function CategorySelectButton({ title, icon, ...rest }: Props) {
  return (
    <Container {...rest}>
      <CategorySelected>
        {icon && <IconFeather name={icon} />}
        <Category>{title}</Category>
      </CategorySelected>
      <IconMaterial name={"keyboard-arrow-down"} />
    </Container>
  );
}
