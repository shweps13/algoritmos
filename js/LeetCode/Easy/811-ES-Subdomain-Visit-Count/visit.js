/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
    let map = new Map();
    
    for (i = 0; i < cpdomains.length; i++) {
        
        // splitting domains first
        let count = cpdomains[i].split(" ")[0]
        let domain = cpdomains[i].split(" ")[1].split(".") 

        let domains
        for (j = domain.length - 1; j >= 0; j--) {
            
            // construct the domain
            if (domains) {
                domains = domain[j] + "." + domains            
            } else {
                domains = domain[j]
            }
            
            // pushing domains to the map
            if (map.has(domains) == false) {
                map.set(domains, count)            
            } else {
                map.set(domains, parseInt(map.get(domains)) + parseInt(count))
            }
        }
    }
    
    // extracting map data to the result array
    let result = []
    map.forEach((value, key) => {
        result.push(value + " " + key)
    })
    
    return result
};