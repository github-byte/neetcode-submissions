/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        let first = head;
        let sec = head;
        while(sec != null && sec?.next != null){
            first = first.next;
            sec = sec.next?.next;
            if(first == sec){
                return true
            }
        }
        return false
    }
}
