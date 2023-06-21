import { useLocation } from 'react-router-dom'

const GameEndPage = () => {
    const location = useLocation()
    return location.state.score
}

export default GameEndPage
