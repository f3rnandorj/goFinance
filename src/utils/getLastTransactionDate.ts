import { DataListProps } from "../screens/Dashboard";

export function getLastTransactionDate(
  collection: DataListProps[],
  type: "positive" | "negative"
) {
  const lastTransaction = new Date(
    Math.max.apply(
      Math,
      collection
        .filter((transaction) => transaction.type === type)
        .map((transaction) => new Date(transaction.date).getTime())
    )
  );

  return `${lastTransaction.getDate()} de ${lastTransaction.toLocaleString(
    "pt-BR",
    {
      month: "long",
    }
  )}`;
}
