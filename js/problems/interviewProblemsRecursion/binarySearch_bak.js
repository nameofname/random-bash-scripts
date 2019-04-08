"use strict";
// 4.2 Write a recursive function that performs a binary search

const _binary = (arr, term, left, right) => {
    if (right - left < 2) {
        const l = arr[left] === term ? left : undefined;
        const r = arr[right] === term ? right : undefined;
        return l || r;
    }

    const half = left + Math.floor((right - left) / 2);
    if (arr[half === term]) {
        return half;
    } else if (arr[half] > term) {
        return _binary(arr, term, left, half);
    } else {
        return _binary(arr, term, half, right);
    }
};

const binarySearch = (arr, term) => {
    return _binary(arr, term, 0, arr.length - 1);
};


const arr1 = [1,4,5,7,9,10,12,16,17,19,26,27,29,30,47,48,50,52,57];
const arr2 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
console.log(binarySearch(arr1, 16));
console.log(binarySearch(arr2, 20));
console.log(binarySearch(arr1, 28));
console.log(binarySearch(arr2, 28));