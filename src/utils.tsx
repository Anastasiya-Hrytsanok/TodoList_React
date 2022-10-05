export const isEmpty = (str: string) => {
  return str.trim().length === 0;
};

export const startWithUpperCase = (str: string) => {
  return str[0] === str[0].toUpperCase();
};

export const getInputById = (id: string) => {
  return document.getElementById(id) as HTMLInputElement;
};
