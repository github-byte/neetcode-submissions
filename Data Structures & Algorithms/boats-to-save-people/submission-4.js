class Solution {
    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     */
    numRescueBoats(people, limit) {
        people.sort((a, b) => a - b)
        let left = 0;
        let right = people.length - 1;
        let count = 0;
        let total = 0
        while(left < right){
            if(people[left] == limit){
                count++
                total++
                break;
            }
            else if(people[right] == limit){
                count++;
                total++
                right--;
            }
            else if(people[left] + people[right] <= limit){
                count++;
                left++;
                total+=2
                right--;
            }
            else if(people[left] + people[right] > limit){
                right--;
            }
            else{
                left++;
                right--
            }
        }
        return count + people.length - total;
    }
}
