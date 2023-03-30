import { DataListProps } from "../screens/Dashboard";

export function getLastTransactionDate(
  collection: DataListProps[],
  type: "positive" | "negative"
) {
  const collectionFiltered = collection.filter(
    (transaction) => transaction.type === type
  );

  if (collectionFiltered.length === 0) {
    return "Não há transações";
  }

  const lastTransaction = new Date(
    Math.max.apply(
      Math,
      collectionFiltered.map((transaction) =>
        new Date(transaction.date).getTime()
      )
    )
  );

  return `${lastTransaction.getDate()} de ${lastTransaction.toLocaleString(
    "pt-BR",
    {
      month: "long",
    }
  )}`;
}
