function mergeTwoLists(list1, list2) {
    // Create a dummy head for the merged list
    const dummyHead = new ListNode(-1);
    let current = dummyHead;

    // Traverse both linked lists
    while (list1 && list2) {
        if (list1.val < list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }

    // Append any remaining nodes from list1 or list2
    current.next = list1 || list2;

    // Return the merged list (skip the dummy head)
    return dummyHead.next;
}

mergeTwoLists([1,2,4], [1,3,4])