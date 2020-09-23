//Java Solution

class Solution {
    public ListNode swapPairs(ListNode head) {
        ListNode newNode = new ListNode(-1);
        newNode.next = head;
        ListNode temp = newNode;
        
        while (head != null && head.next != null) {
            ListNode first = head;
            ListNode second = head.next;
            
            temp.next = second;
            first.next = second.next;
            second.next = first;
            
            temp = first;
            head = first.next;
        }
        
        return newNode.next;
    }
}