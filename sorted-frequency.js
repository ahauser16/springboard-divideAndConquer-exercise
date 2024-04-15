function sortedFrequency(arr, num) {
    let firstOccurrence = findFirst(arr, num);
    if (firstOccurrence == -1) return -1;
    let lastOccurrence = findLast(arr, num);
    return lastOccurrence - firstOccurrence + 1;
}

function findFirst(arr, num) {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if ((mid === 0 || num > arr[mid - 1]) && arr[mid] === num) {
            return mid;
        } else if (num > arr[mid]) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return -1;
}

function findLast(arr, num) {
    let start = 0;
    let end = arr.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if ((mid === arr.length - 1 || num < arr[mid + 1]) && arr[mid] === num) {
            return mid;
        } else if (num < arr[mid]) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
    return -1;
}

module.exports = sortedFrequency;