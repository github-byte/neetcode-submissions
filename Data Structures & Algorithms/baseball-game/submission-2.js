class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let scores = [];
        for(let i=0;i<operations.length;i++){
            if(operations[i] == '+'){
                let sum = scores?.[scores?.length-1] + scores?.[scores?.length-2]
                sum && scores.push(sum)
            }
            if(operations[i] == 'D'){
                let doub = scores?.[scores.length-1] * 2
                doub && scores.push(doub)
            }
            if(operations[i] == 'C'){
                scores.pop()
                // console.log(scores)
            }
            else if(!Number.isNaN(Number(operations[i]))){
                scores.push(Number(operations[i]))
            }
        }

        return scores.reduce((a, b) => a + b, 0)
    }
}
