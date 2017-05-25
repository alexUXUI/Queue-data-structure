var inspect = require('util').inspect;
var dataStore = require('./data.js');

class Queue {

  constructor() {
    this.dataStore = [];
  }

  enque( operation ) {
    return this.dataStore.push(operation);
  }

  deque() {
    return this.dataStore.shift();
  }

  peek() {
    return this.dataStore[0];
  }

}

let serverQueue = new Queue();

function enqueTheData( data ) {
  data.map(pieceOfData => {
    serverQueue.enque( pieceOfData );
  });
  return Promise.resolve();
}

function dequeTheData( queue ) {
  let data = queue.deque();
  return Promise.resolve( data );
}

function transformData( data ) {
  return console.log(`Simulating a data transform to this piece of data ${ inspect( data ) }`);
}


/* uncomment to run the functions that simulate

1) adding something to the queue
2) taking it off of the queue
3) doing something with it


enqueTheData( dataStore )
.then(dequeTheData( serverQueue )
.then(data => transformData( data )));

*/


module.exports = serverQueue;
