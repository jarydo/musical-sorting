export const swap = (array: number[], index1: number, index2: number) => {
    [array[index1], array[index2]] = [array[index2], array[index1]];
}