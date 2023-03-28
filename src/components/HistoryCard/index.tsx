import React from "react";
import { Amount, Container, Title } from "./styles";

interface Props {
  title: string;
  amount: string;
  color?: string;
}

export function HistoryCard({ title, amount, color = "white" }: Props) {
  return (
    <Container color={color}>
      <Title>{title}</Title>
      <Amount>{amount}</Amount>
    </Container>
  );
}
