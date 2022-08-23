let apiCallCounter = 0;
export const apiCall = async () => {
  apiCallCounter++;
  if (apiCallCounter % 3 === 0) {
    return new Promise((resolve) => setTimeout(() => resolve(false), 1000));
  }
  return new Promise((resolve) => setTimeout(() => resolve(true), 1000));
};
