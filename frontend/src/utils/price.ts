export const formatPrice = (price: number) => {
  return `$ ${price?.toLocaleString("es-CO") || "0"}`;
};