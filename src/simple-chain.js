const chainMaker = {
  chain : [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if(typeof(value) === "undefined"){
      this.chain.push('');
    }else {
       this.chain.push( value === null ? 'null' : value);
    }
    return this;
  },
  removeLink(position) {
    position -= 1;
    if (  Number.isInteger(position) &&
          position >= 0 && position < this.getLength() - 1){
          this.chain.splice(position, 1);
    }else {
      this.chain = [];
      throw new Error();
 
    }
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
     let result = `( ${this.chain.join(' )~~( ')} )`;
     this.chain = [];
    return result;
  }
};


module.exports = chainMaker;
