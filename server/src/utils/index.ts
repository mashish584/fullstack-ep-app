export const printObject = (data: object) => JSON.stringify(data, null, 2);

export const firstUC = (text: string) => {
  text = text.trim();
  return `${text.substring(0, 1).toUpperCase()}${text.substring(1, text.length)}`;
};
