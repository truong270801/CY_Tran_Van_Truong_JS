const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 10, 11]
]
function convertMatrix(matrix) {
    let newMatrix = [];
    for (let i = 0; i < matrix[0].length; i++) {
        let newRow = [];
        for (let j = 0; j < matrix.length; j++) {
            newRow.push(matrix[j][i]);
        }
      newMatrix.push(newRow.reverse());
    }
    return newMatrix
}
console.log(convertMatrix(matrix));