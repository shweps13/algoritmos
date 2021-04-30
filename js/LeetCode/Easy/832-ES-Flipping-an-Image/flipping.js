/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
    for (i = 0; i < A.length; i++) {
        A[i].reverse();
        for (j = 0; j < A[i].length; j++) {
            if (A[i][j] == 0) {
                A[i][j] = 1
            } else {
                A[i][j] = 0
            }
        }
    }
    // console.log(A)
    return A
};