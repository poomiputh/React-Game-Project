interface KingCard_1_Props {
    opacity: string
    maxHeight: number
}

export const KingCard_1 = ({ opacity, maxHeight }: KingCard_1_Props) => {
    const styling = {
        filter: 'opacity(' + opacity + ')',
        maxHeight: maxHeight,
    }
    return (
        <>
            <img src="src\images\kingCard_1.svg" style={styling}></img>
        </>
    )
}

interface QueenCard_1_Props {
    opacity: string
    maxHeight: number
}

export const QueenCard_1 = ({ opacity, maxHeight }: KingCard_1_Props) => {
    const styling = {
        filter: 'opacity(' + opacity + ')',
        maxHeight: maxHeight,
    }
    return (
        <>
            <img src="src\images\queenCard_1.svg" style={styling}></img>
        </>
    )
}

export const StartGameButton = () => {
    return (
        <>
            <img src="src\images\startGame.svg" style={{ minHeight: 80 }}></img>
        </>
    )
}

export const Sonic = () => {
    return (
        <>
            <img src="src\images\sonic.svg" style={{ minHeight: 80 }}></img>
        </>
    )
}
