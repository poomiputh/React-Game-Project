import { useLocation } from 'react-router-dom'

const GameEndPage = () => {
    const location = useLocation()
    return (
        <>
            <h1>{location.state.playerName}</h1>
            <h1>{location.state.score}</h1>
        </>
    )
}

export default GameEndPage
