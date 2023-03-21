import { HighlightCard } from "../../components/HighlightCard";
import {
  TransactionCard,
  TransactionCardProps,
} from "../../components/TransactionCard";

import {
  Container,
  Header,
  HighlightCards,
  Icon,
  Photo,
  Title,
  Transactions,
  TransactionsList,
  User,
  UserGreeting,
  UserInfo,
  UserName,
  UserWrapper,
} from "./styles";

export interface DataListProps extends TransactionCardProps {
  id: string;
}

export function Dashboard() {
  const dataMock: DataListProps[] = [
    {
      id: "1",
      type: "positive",
      title: "Desenvolvimento do site",
      amount: "R$12.000,00",
      category: { name: "Vendas", icon: "dollar-sign" },
      date: "12/04/2023",
    },
    {
      id: "2",
      type: "negative",
      title: "Desenvolvimento do site",
      amount: "R$12.000,00",
      category: { name: "Vendas", icon: "coffee" },
      date: "12/04/2023",
    },
    {
      id: "3",
      type: "positive",
      title: "Desenvolvimento do site",
      amount: "R$12.000,00",
      category: { name: "Vendas", icon: "shopping-bag" },
      date: "12/04/2023",
    },
  ];

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{
                uri: "https://avatars.githubusercontent.com/u/108803562?v=4",
              }}
            />
            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Fernando</UserName>
            </User>
          </UserInfo>
          <Icon name="power" />
        </UserWrapper>
      </Header>

      <HighlightCards>
        <HighlightCard
          type="up"
          title="Entradas"
          amount="R$ 17.400,00"
          lastTransaction="Ultima entrada dia 13 de abril"
        />
        <HighlightCard
          type="down"
          title="Saidas"
          amount="R$ 1.400,00"
          lastTransaction="Ultima saida dia 13 de abril"
        />
        <HighlightCard
          type="total"
          title="Total"
          amount="R$ 16.000,00"
          lastTransaction="01 á 16 de abril"
        />
      </HighlightCards>

      <Transactions>
        <Title>Listagem</Title>
        <TransactionsList
          data={dataMock}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />
      </Transactions>
    </Container>
  );
}
