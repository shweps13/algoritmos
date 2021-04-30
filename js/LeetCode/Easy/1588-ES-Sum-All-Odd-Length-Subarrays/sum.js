/**
 * @param {number[]} arr
 * @return {number}
 */

var sumOddLengthSubarrays = function(arr) {
    let result = 0;
    let sumLength = 1;
    
    while (sumLength <= arr.length) {
        if (sumLength == 1) {
            for (i = 0; i < arr.length; i++) {
                result += arr[i]
            }
        } else {
            let pointer1 = 0;
            let pointer2 = sumLength;
            let sliceArr = arr.slice(pointer1,pointer2)
            
            while (sliceArr.length == sumLength) {
                // console.log(sliceArr, 'with length', sliceArr.length)
                // console.log('result', result)
                
                for (j = 0; j < sliceArr.length; j++) {
                    result += sliceArr[j]
                }
                
                pointer1 += 1;
                pointer2 += 1;
                sliceArr = arr.slice(pointer1,pointer2)
            }       
        }   
        sumLength += 2
    }
    return result
};