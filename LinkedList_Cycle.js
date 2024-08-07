var hasCycle = function(head) {
    let fastPointer = head;
    let slowPointer = head;
    
    while(fastPointer !== null && fastPointer.next !== null) {
        fastPointer = fastPointer.next.next;
        slowPointer = slowPointer.next;
        if (fastPointer === slowPointer) {
            return true;
        }
    }
    return false;
};

hasCycle([3,2,0,-4]);