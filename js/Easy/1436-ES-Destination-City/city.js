/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    let map = new Map();
    for (i = 0; i < paths.length; i++) {
        map.set(paths[i][0], paths[i][1])
    }

    let localCity = map.get(paths[0][0])
    while (localCity) {
        if (!map.has(localCity)) {
            break    
        } else {
            localCity = map.get(localCity)
        }
    }
    
    return localCity
};