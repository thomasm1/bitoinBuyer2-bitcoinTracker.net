// model object with methods for store CRUD operations
class Metal {

  constructor(store) {
    this.store = store;
  }
  // hydrate store with initial data
  initStore(data) {
    const newStore = Object.assign(this.store, data);
    this.store = newStore;
  };
  // utility functions
  getStore() {
    return this.store;
  }
    printStore() {
    console.log(this.store);
  };
  isMetalInStore(id) {
    const keys = Object.keys(this.store);
    return keys.includes(id);
  }
  
  // get list of metals from storage
  getMetals(id, callback) {
    return callback(null, this.store);
  }
  // get metal from storage
  getMetal(id, callback) {
    if(this.isMetalInStore(id)) {
      return callback(null, this.store[id]);
    }
    return callback('Metal does not exist');
  }
  // modify existing metal or add a new one to storage
  putMetal(id, metal, callback) {
    if (id !== metal.firstName.toLowerCase()) {
      return callback("Metal id in request path and body do not match.");
    }
    const newStore = Object.assign({}, this.store);
    if(this.isMetalInStore(id)) {
      const newMetal = Object.assign(this.store[id], metal);
      newStore[id] = newMetal;
    }else {
      newStore[id] = metal;
    }
    this.store = newStore;
    return callback(null, id);
  }
  deleteMetal(id, callback) {
    const newStore = Object.assign({}, this.store);
    delete newStore[id];
    this.store = newStore;
    return callback(null, id);
  }
}

module.exports = Metal;