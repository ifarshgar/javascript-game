export const getRandomInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

export const deepCopy = (obj: object) => JSON.parse(JSON.stringify(obj));
