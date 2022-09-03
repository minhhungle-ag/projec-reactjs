export function truncateText(text, maxLength) {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength - 1)}...`;
}

export function formatPrice(value) {
  return value.toLocaleString("vi", { style: "currency", currency: "VND" });
}
