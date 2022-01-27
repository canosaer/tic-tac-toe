const isBoardEmpty = (squares) => {
    return squares.filter((square) => square === null).length === 9
}

const isBoardFull = (squares) => {
    return squares.filter((square) => square === null).length === 0
}

const getRandomInt = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max-min+1)) + min
}

const calculateWinners = (squares) => {
    const lines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];

    for(let i = 0; i<lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a]
        }
    }

    return null;
}

export {
    isBoardEmpty,
    isBoardFull,
    getRandomInt,
    calculateWinners
}