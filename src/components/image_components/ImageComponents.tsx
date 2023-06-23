interface CardProps {
    src: string
    opacity?: string
    maxWidth?: string
    minWidth?: string
    isFlipped?: boolean
}

export const MordoxCard = ({
    src,
    opacity = '100%',
    maxWidth = '20vh',
    minWidth = '20vh',
    isFlipped = false,
}: CardProps) => {
    const styling = {
        filter: 'opacity(' + opacity + ')',
        maxWidth: maxWidth,
        minWidth: minWidth,
    }
    return (
        <>
            {!isFlipped ? (
                <img src={src} style={styling}></img>
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
export const ReTurnToHome = () => {
    return (
        <>
            <img
                src="src\images\back_1.svg"
                style={{ minHeight: '12vh' }}
            ></img>
        </>
    )
}
export const DelScore = () => {
    return (
        <>
            <img
                src="src\images\bin.svg"
                style={{ minHeight: '3vh', maxHeight: '5vh' }}
            ></img>
        </>
    )
}
export const ConfirmName = () => {
    return (
        <>
            <img
                src="src\images\confirm.svg"
                style={{ minHeight: '12vh' }}
            ></img>
        </>
    )
}
export const BackBtn = () => {
    return (
        <>
            <img
                src="src\images\backBTN_2.svg"
                style={{ minHeight: '10vh' }}
            ></img>
        </>
    )
}
