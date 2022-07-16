const chunkArr = (arr: string[], size: number): string[][] => {
  const chunks: string[][] = [];
  while (arr.length) {
    const chunkSize = Math.ceil(arr.length / size--);
    const chunk: string[] = arr.slice(0, chunkSize);
    chunks.push(chunk);
    arr = arr.slice(chunkSize);
  }
  return chunks;
};

export default chunkArr;
