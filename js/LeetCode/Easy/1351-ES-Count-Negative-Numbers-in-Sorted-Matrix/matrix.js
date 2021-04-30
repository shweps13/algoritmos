/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
    let result = 0;
    
    for (i = 0; i < grid.length; i++){
        for (j = grid[i].length ; j >= 0; j--){
            if (grid[i][j] >= 0) {
                break
            }
            if (grid[i][j] < 0) {
                result ++
            }
            
        }
        
    }
    
    return result;
};