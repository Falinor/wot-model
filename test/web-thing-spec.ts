import * as chai from 'chai';
import { readFileSync } from 'fs';

import { WebThing } from '../src/index';
import ErrnoException = NodeJS.ErrnoException;

const expect = chai.expect;

describe('WebThing', () => {
  it('should instantiate a WebThing properly', () => {
    const data = readFileSync('test/car.json', 'utf8');
    const thing: WebThing = JSON.parse(data);

    // Test the object itself
    expect(thing).to.not.be.an('undefined');
    expect(thing).to.not.be.a('null');
    // Test properties
    expect(thing.id).to.equal('myCar');
    expect(thing.name).to.equal('My great car');
    expect(thing.description).to.equal('This is such a great car.');
    expect(thing.tags).to.include('cart');
    expect(thing.links.model.link).to.equal('model/');
  });
});
