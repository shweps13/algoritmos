# 0to2 -> [0]
# 1to2 -> 1 => [0,1]
# 2to2 -> 10 => [0,1,1]
# 3to2 -> 11 => [0,1,1,2]
# 4to2 -> 100 => [0,1,1,2,1]
# 5to2 -> 101 => [0,1,1,2,1,2]

# for each element in range num
#       => transfer it to bin
#       => loop through and put sum of 1s to the res array

class Solution:
    def binToOnes(self, inputs):
        print('here==>', inputs)
        if inputs == 0:
            return 0
        else:
            ones = bin(inputs).replace("0b", "").replace("0", "")
            # print(ones)
            # print(len(ones))
            return len(ones)
        
    def countBits(self, num: int) -> List[int]:
        result = list()
        for i in range(num+1):
            # print('Ololo', i)
            result.append(self.binToOnes(i))
        return result