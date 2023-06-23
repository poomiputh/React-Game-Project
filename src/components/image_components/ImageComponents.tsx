interface CardProps {
    opacity?: string
    maxWidth?: string
    isFlipped?: boolean
}

export const KingCard_1 = ({
    opacity = '100%',
    maxWidth = '25vh',
    isFlipped = false,
}: CardProps) => {
    const styling = {
        filter: 'opacity(' + opacity + ')',
        maxWidth: maxWidth,
    }
    return (
        <>
            {!isFlipped ? (
                <img src="src\images\kingCard_1.svg" style={styling}></img>
            ) : (
                <img src="src\images\backCard_1.svg" style={styling}></img>
            )}
        </>
    )
}

export const KingCard_2 = ({
    opacity = '100%',
    maxWidth = '25vh',
    isFlipped = false,
}: CardProps) => {
    const styling = {
        filter: 'opacity(' + opacity + ')',
        maxWidth: maxWidth,
    }
    return (
        <>
            {!isFlipped ? (
                <img src="src\images\kingCard_2.svg" style={styling}></img>
            ) : (
                <img src="src\images\backCard_1.svg" style={styling}></img>
            )}
        </>
    )
}

export const KingCard_3 = ({
    opacity = '100%',
    maxWidth = '25vh',
    isFlipped = false,
}: CardProps) => {
    const styling = {
        filter: 'opacity(' + opacity + ')',
        maxWidth: maxWidth,
    }
    return (
        <>
            {!isFlipped ? (
                <img src="src\images\kingCard_3.svg" style={styling}></img>
            ) : (
                <img src="src\images\backCard_1.svg" style={styling}></img>
            )}
        </>
    )
}

export const KingCard_4 = ({
    opacity = '100%',
    maxWidth = '25vh',
    isFlipped = false,
}: CardProps) => {
    const styling = {
        filter: 'opacity(' + opacity + ')',
        maxWidth: maxWidth,
    }
    return (
        <>
            {!isFlipped ? (
                <img src="src\images\kingCard_4.svg" style={styling}></img>
            ) : (
                <img src="src\images\backCard_1.svg" style={styling}></img>
            )}
        </>
    )
}

export const QueenCard_1 = ({
    opacity = '100%',
    maxWidth = '25vh',
    isFlipped = false,
}: CardProps) => {
    const styling = {
        filter: 'opacity(' + opacity + ')',
        maxWidth: maxWidth,
    }
    return (
        <>
            {!isFlipped ? (
                <img src="src\images\queenCard_1.svg" style={styling}></img>
            ) : (
                <img src="src\images\backCard_1.svg" style={styling}></img>
            )}
        </>
    )
}

export const QueenCard_2 = ({
    opacity = '100%',
    maxWidth = '25vh',
    isFlipped = false,
}: CardProps) => {
    const styling = {
        filter: 'opacity(' + opacity + ')',
        maxWidth: maxWidth,
    }
    return (
        <>
            {!isFlipped ? (
                <img src="src\images\queenCard_2.svg" style={styling}></img>
            ) : (
                <img src="src\images\backCard_1.svg" style={styling}></img>
            )}
        </>
    )
}
export const QueenCard_3 = ({
    opacity = '100%',
    maxWidth = '25vh',
    isFlipped = false,
}: CardProps) => {
    const styling = {
        filter: 'opacity(' + opacity + ')',
        maxWidth: maxWidth,
    }
    return (
        <>
            {!isFlipped ? (
                <img src="src\images\queenCard_3.svg" style={styling}></img>
            ) : (
                <img src="src\images\backCard_1.svg" style={styling}></img>
            )}
        </>
    )
}
export const QueenCard_4 = ({
    opacity = '100%',
    maxWidth = '25vh',
    isFlipped = false,
}: CardProps) => {
    const styling = {
        filter: 'opacity(' + opacity + ')',
        maxWidth: maxWidth,
    }
    return (
        <>
            {!isFlipped ? (
                <img src="src\images\queenCard_4.svg" style={styling}></img>
            ) : (
                <img src="src\images\backCard_1.svg" style={styling}></img>
            )}
        </>
    )
}

export const KnightCard_1 = ({
    opacity = '100%',
    maxWidth = '25vh',
    isFlipped = false,
}: CardProps) => {
    const styling = {
        filter: 'opacity(' + opacity + ')',
        maxWidth: maxWidth,
    }
    return (
        <>
            {!isFlipped ? (
                <img src="src\images\knightCard_1.svg" style={styling}></img>
            ) : (
                <img src="src\images\backCard_1.svg" style={styling}></img>
            )}
        </>
    )
}
export const KnightCard_2 = ({
    opacity = '100%',
    maxWidth = '25vh',
    isFlipped = false,
}: CardProps) => {
    const styling = {
        filter: 'opacity(' + opacity + ')',
        maxWidth: maxWidth,
    }
    return (
        <>
            {!isFlipped ? (
                <img src="src\images\knightCard_2.svg" style={styling}></img>
            ) : (
                <img src="src\images\backCard_1.svg" style={styling}></img>
            )}
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
