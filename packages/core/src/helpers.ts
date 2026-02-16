export const formatDate = (date: string | Date) => {
  const d = new Date(date);
  return d.toLocaleDateString();
};

export const isEmpty = (value: unknown) => {
  if (value === null || value === undefined) return true;
  if (typeof value === "string" && value.trim() === "") return true;
  if (Array.isArray(value) && value.length === 0) return true;
  return false;
};
