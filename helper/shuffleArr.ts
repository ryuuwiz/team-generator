const shuffleArr = (data: string) => {
  const newStr = data;
  const arr = newStr.split("\n");
  return arr.sort(() => 0.5 - Math.random());
};

export default shuffleArr;
