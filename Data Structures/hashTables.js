class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    const address = this._hash(key);
    if (!this.data[address]) {
      //   this.data[address] = [key, value];
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }

  get(key) {
    const address = this._hash(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      const bucketLength = currentBucket.length;
      for (let i = 0; i < bucketLength; i++) {
        const dataKey = currentBucket[i][0];
        if (dataKey === key) {
          return currentBucket[i][1];
        } else {
          return undefined;
        }
      }
    } else {
      return undefined;
    }
  }
  keys() {
    const keyArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        keyArray.push(this.data[i][0][0]);
      }
    }
    return keyArray;
  }
}

const myHashTable = new HashTable(50);
console.log(myHashTable._hash("cat"));
myHashTable.set("grapes", 10000);
myHashTable.set("a", "main pagal hu");
console.log(myHashTable.get("grapes"));
console.log(myHashTable.get("a"));
