const os = require('os')
const pcSpecs = {
    os: os.platform(),
    release: os.release(),
    totalRam: os.totalmem(),
    freeRam: os.freemem(),
    cpu: os.cpus()[0].model,
}

console.log(pcSpecs);