export class DynamicArray {
    constructor() {
        this.size = 0;
        this.capacity = 1;
        this.arr = this.#make_array(this.capacity);
    }

    is_empty() {
        if (this.size === 0) {
            return true;
        }
        return false;
    }

    get(index) {
        if (index < 0 || index >= this.size) {
            return Error("Index out of Bounds");
        }

        return this.arr[index];
    }

    push(element) {
        if (this.size === this.capacity) {
            this.#resize(2 * this.capacity);
        }

        this.arr[this.size] = element;
        this.size += 1;
    }

    insert(index, element) {
        if (index < 0 || index >= this.size) {
            return Error("Enter an Appropiate Index");
        }

        if (this.size === this.capacity) {
            this.#resize(2 * this.capacity);
        }

        for (let i = this.size - 1; i > index - 1; i--) {
            this.arr[i + 1] = this.arr[i];
        }

        this.arr[index] = element;
        this.size += 1;
    }

    prepend(element) {
        this.insert(0, element);
    }

    pop() {
        if (this.size === 0) {
            return Error("Array is Empty Cannot Remove Last Element");
        }

        let element = this.arr[this.size - 1];
        this.arr[this.size - 1] = "None";
        this.size -= 1;

        return element;
    }

    removeAt(index) {
        if (this.size === 0) {
            return Error("Array is Empty Cannot Remove Last Element");
        }

        if (index === this.size - 1) {
            this.arr[index] = "None";
            this.size -= 1;
            return;
        }

        if (index < 0 || index >= this.size) {
            return Error("Index out of Bounds");
        }

        for (let i = 0; i < this.size - 1; i++) {
            this.arr[i] = this.arr[i + 1];
        }

        this.arr[this.size - 1] = "None";
        this.size -= 1;
    }

    find(element) {
        for (let i = 0; i < this.size; i++) {
            if (this.arr[i] === element) {
                return i;
            }
        }

        return -1;
    }

    #resize(new_capacity) {
        let BiggerArray = this.#make_array(new_capacity);

        for (let i = 0; i < this.size; i++) {
            BiggerArray[i] = this.arr[i];
        }

        this.arr = BiggerArray;
        this.capacity = new_capacity;
    }

    #make_array(new_capacity) {
        return new Array(new_capacity).fill("None");
    }

    print() {
        console.log(this.arr);
    }
}

// let arr = new DynamicArray();

// arr.push(1);
// arr.push("2");
// arr.push('Three');
// arr.push(4);
// arr.push(5);

// arr.print();

// console.log(arr.size);

// console.log(arr.is_empty());

// console.log(arr.get(1));

// arr.insert(2, 9);

// arr.print();

// arr.prepend(0);

// arr.print();

// arr.pop();

// arr.print();

// arr.removeAt(1);

// arr.print();

// console.log(arr.find(9));