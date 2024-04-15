function findRotationCount(arr) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        // Check if mid element is the smallest
        if (arr[mid] < arr[mid - 1]) {
            return mid;
        }

        // If the left half is sorted, the smallest element is in the right half
        if (arr[start] <= arr[mid]) {
            start = mid + 1;
        }

        // If the right half is sorted, the smallest element is in the left half
        else {
            end = mid - 1;
        }
    }

    return 0;
}

module.exports = findRotationCount;