class MyHashSet {
    constructor() {
        this.map = []
    }

    /**
     * @param {number} key
     * @return {void}
     */
    add(key) {
        let keyItem = this.map.find((item) => item == key )
        if(!keyItem){
            this.map.push(key)
        }
        return null;
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        let keyIdx = this.map.findIndex((item) => item == key)
        if(keyIdx >= 0){
            this.map.splice(keyIdx, 1)
        }
        return null
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
        console.log(this.map, this.map.find((item) => item == key))
        return Boolean(this.map.find((item) => item == key))
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
