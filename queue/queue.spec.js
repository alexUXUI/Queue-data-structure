var queue = require('./queue.js');
var expect = require('chai').expect;
var inspect = require('util').inspect;

describe('Queue testing suite 🔬', () => {

  it('should test enque method', () => {
    queue.enque(1);
    expect( queue.dataStore ).to.deep.equal( [1] );
  });

  it('should test deque method', () => {
    queue.deque();
    expect( queue.dataStore ).to.deep.equal( [] );
  });

});
