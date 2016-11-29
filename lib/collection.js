class Collection {
  constructor(){
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
    return this;
  }

  find(id) {
    return this.items.filter((item) => item.id == id)[0];
  }

  update(id, content) {
    const item = this.find(id);
    if(item){
      item.content = content;
    }
  }

  remove(id) {
    var index = this.items.indexOf(this.find(id));
    if(index != -1) {
      this.items.splice(index, 1);
    }
  }
}

module.exports = Collection;
