export const formatCurrency = (value: number) =>
  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);

export const formatDate = (date: string) =>
  new Intl.DateTimeFormat("pt-BR").format(new Date(date));
