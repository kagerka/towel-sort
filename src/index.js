module.exports = function towelSort(matrix) {
    let arr = [];
    let result = [];
    if (!matrix) {
        return [];
    }
    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 == 1) {
            arr[i] = matrix[i].reverse();
        }
        arr[i] = matrix[i];
        result = result.concat(arr[i]);
    }
    return result;
}
