const EventEmitter = require('events')
const customEmitter = new EventEmitter()

customEmitter.on('response', (word) => {
    console.log('data received' + ' word ' + word)
})

customEmitter.emit('response', 'lol')