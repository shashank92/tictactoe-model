Object.assign(global, require('./src/lib/constants'))
global.ai = require('./src/lib/ai')
global.D = require('./src/lib/detect')
global.T = require('./src/ttt')