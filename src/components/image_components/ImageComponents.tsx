interface CardProps {
    opacity: string
    maxHeight: number
}

export const KingCard_1 = ({ opacity, maxHeight }: CardProps) => {
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

export const KingCard_2 = ({ opacity, maxHeight }: CardProps) => {
    const styling = {
        filter: 'opacity(' + opacity + ')',
        maxHeight: maxHeight,
    }
    return (
        <>
            <img src="src\images\kingCard_2.svg" style={styling}></img>
        </>
    )
}

export const KingCard_3 = ({ opacity, maxHeight }: CardProps) => {
    const styling = {
        filter: 'opacity(' + opacity + ')',
        maxHeight: maxHeight,
    }
    return (
        <>
            <img src="src\images\kingCard_3.svg" style={styling}></img>
        </>
    )
}

export const KingCard_4 = ({ opacity, maxHeight }: CardProps) => {
    const styling = {
        filter: 'opacity(' + opacity + ')',
        maxHeight: maxHeight,
    }
    return (
        <>
            <img src="src\images\kingCard_4.svg" style={styling}></img>
        </>
    )
}

export const QueenCard_1 = ({ opacity, maxHeight }: CardProps) => {
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

export const QueenCard_2 = ({ opacity, maxHeight }: CardProps) => {
    const styling = {
        filter: 'opacity(' + opacity + ')',
        maxHeight: maxHeight,
    }
    return (
        <>
            <img src="src\images\queenCard_2.svg" style={styling}></img>
        </>
    )
}
export const QueenCard_3 = ({ opacity, maxHeight }: CardProps) => {
    const styling = {
        filter: 'opacity(' + opacity + ')',
        maxHeight: maxHeight,
    }
    return (
        <>
            <img src="src\images\queenCard_3.svg" style={styling}></img>
        </>
    )
}
export const QueenCard_4 = ({ opacity, maxHeight }: CardProps) => {
    const styling = {
        filter: 'opacity(' + opacity + ')',
        maxHeight: maxHeight,
    }
    return (
        <>
            <img src="src\images\queenCard_4.svg" style={styling}></img>
        </>
    )
}

export const StartGameButton = () => {
    return (
        <>
            <img
                src="src\images\start_1.svg"
                style={{ minHeight: '12vh' }}
            ></img>
        </>
    )
}

export const ScoreGameButton = () => {
    return (
        <>
            <img
                src="src\images\score_1.svg"
                style={{ minHeight: '12vh' }}
            ></img>
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
