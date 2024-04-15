function findFloor(arr, x) {
    let start = 0;
    let end = arr.length - 1;
    let floor = -1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        // If element is equal to x, x is the floor of itself
        if (arr[mid] === x) {
            return arr[mid];
        }

        // If arr[mid] is less than x, arr[mid] could be a potential floor
        if (arr[mid] < x) {
            floor = arr[mid];
            start = mid + 1;
        }

        // If arr[mid] is greater than x, we need to look in the left half
        else {
            end = mid - 1;
        }
    }

    return floor;
}

module.exports = findFloor;