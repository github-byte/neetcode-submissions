class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isIsomorphic(s, t) {
        let map = new Map()
        let rev = new Map()
        for(let i=0;i<s.length;i++){
            if(!map.get(s[i])){
                map.set(s[i], t[i])
            }
            if(!rev.get(t[i])){
                rev.set(t[i], s[i])
            }
            if(map.get(s[i]) || rev.get(t[i])){

                if(map.get(s[i]) != t[i] || rev.get(t[i]) !== s[i])
                return false
            }
        }
        return true
    }
}
