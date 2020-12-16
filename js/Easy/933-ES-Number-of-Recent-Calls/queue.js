
var RecentCounter = function() {
    this.queue = new Queue();
    this.counter = 0
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    
    this.queue.enqueue(t);
    this.counter++
    
    while (this.queue.front() < t - 3000) {
        this.queue.dequeue()
        this.counter--
    }
    
    return this.counter
    
    
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */