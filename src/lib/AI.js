var Promise = require('bluebird')
var D = require('./detect')
Object.assign(global, require('./constants'))
Object.assign(global, require('./util'))

function AI(grid, mark) {
    assertGridExists(grid)
    assertMarkExists(mark)
    var opponentsMark = mark === X ? O : X
    var detect = D(grid)
    var isEmpty = detect.isEmpty()
    var freeSpaces = detect.freeSpaces()
    var waysToWin = detect.waysToWin(mark)

    function randomChoice() {
        var randomIndex = Math.floor(Math.random() * freeSpaces.length)
        return freeSpaces[randomIndex]
    }

    function bestChoice() {
        //
    }

    return Promise.resolve(randomChoice())
}

module.exports = AI