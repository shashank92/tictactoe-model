Object.assign(global, require('./src/lib/constants'))
Object.assign(global, require('./src/lib/util'))
global.D = require('./src/lib/detect')
global.AI = require('./src/lib/AI')
