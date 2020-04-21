class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        strs_dict = dict()
        
        for i in strs:
            key = ''.join(sorted(i))
            print(key)
            
            if strs_dict.get(key):
                strs_dict[key].append(i)
            else:
                strs_dict[key] = [i]
            
        print(strs_dict) 
        return strs_dict.values()