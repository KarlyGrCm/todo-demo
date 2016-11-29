"use strict";
const Collection = require('../lib/collection');
const expect     = require('chai').expect;

describe('Collection', () => {

  it('adds items to the collection', () => {
    const collection = new Collection();
    collection.addItem({id: 1, content: 'Hello world'});

    expect(collection.items).to.eql([{id: 1, content: 'Hello world'}]);
  });

  it('retrieves the item that match with the id', () => {
    const collection = new Collection();
    collection.addItem({id: 1, content: 'Hello world'});

    expect(collection.find(1)).to.eql({ id: 1, content: 'Hello world'});
  });



  it('updates item in the collection', () => {
    const collection = new Collection();

    collection
      .addItem({id: 1, content: 'Hello world'})
      .update(1, 'Hello Guadalajara')

    expect(collection.find(1).content).to.equal('Hello Guadalajara');
  });

  it('removes items in the collection', () => {
    const collection = new Collection();

    collection
      .addItem({id: 1, content: 'Hello world'})
      .remove(1);

    expect(collection.items).to.eql([]);
  });
});
