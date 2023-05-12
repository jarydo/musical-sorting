import { swap } from "./util";

const quickSort = (array: number[], first: number, last: number) => {
    if (last <= first) return;

    const pivot = array[first];
    let pos = last; 

    for (let i = last; i > first; --i) {
        if (array[i] > pivot) {
            swap(array, pos, i);
            --pos;
        }
    }
    swap(array, first, pos);
    quickSort(array, first, pos - 1);
    quickSort(array, pos + 1, last);
}

export default quickSort;