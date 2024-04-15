function countZeroes(arr) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if ((mid === 0 || arr[mid - 1] === 1) && arr[mid] === 0) {
            return arr.length - mid;
        } else if (arr[mid] === 1) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return 0;
}

module.exports = countZeroes;