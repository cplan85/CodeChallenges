class MyQueue {
    constructor() {
        this.pushStack = [];
        this.popStack = [];
    }

    push(val){
        this.pushStack.push(val);
    }
    pop(){
        // if the popStack is empty then push item from pushStack
        if (this.popStack.length === 0) {
            while(this.pushStack.length){
                this.popStack.push(this.pushStack.pop() )
            }
        }

        return this.popStack.pop();
    }
    peek(){
        if(this.popStack.length === 0){
            while(this.pushStack.length){
                this.popStack.push(this.pushStack.pop())
            }
        }
        // you just want the last item from the popStack
        return this.popStack[this.popStack.length -1];
    }
    empty(){  
        return this.popStack.length === 0 && this.pushStack.length === 0
    }
}