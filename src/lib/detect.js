Object.assign(global, require('./constants'))
Object.assign(global, require('./util'))

function D(grid) {
    assertGridExists(grid)

    // Utility
    function isFreeSpace(index) {
        return grid[index] === FREE_SPACE
    }

   function markedBy(mark, index) {
        return grid[index] === mark
    }

    function twoMarkedBy(mark, row) {
        var cellIsMine = markedBy.bind(null, mark)
        return row.filter(cellIsMine).length === 2
    }

    // Interface
    function winningRow(mark) {
        var cellIsMine = markedBy.bind(null, mark)
        return ROWS.find(function(row) {
            return row.every(cellIsMine)
        })
    }

   function freeSpaces() {
        return Array.from(grid).reduce(function(freeSpace, cell, index) {
            return  cell === FREE_SPACE
                    ? freeSpace.concat(index)
                    : freeSpace
        }, [])
    }

    function isEmpty() {
        return Array.from(grid).every(function(character, index) {
            return isFreeSpace(index)
        })
    }

    function waysToWin(mark) {
        var twoCellsAreMine = twoMarkedBy.bind(null, mark)
        return  unique(
                    ROWS.filter(twoCellsAreMine)
                    .map(function(row) {
                        return row.find(isFreeSpace)
                    })
                    .filter(exists)
                ).sort()
    }

    function children(mark) {
        return  freeSpaces().map(function(freeSpace) {
                    return  grid.substr(0, freeSpace)
                            + mark
                            + grid.substr(freeSpace + 1)
                })
    }

    return {
        winningRow: winningRow,
        freeSpaces: freeSpaces,
        isEmpty: isEmpty,
        waysToWin: waysToWin,
        children: children
    }
}

module.exports = D