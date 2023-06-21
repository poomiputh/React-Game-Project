import MemCard from './MemCard'
interface GamePageProps {
    playerName: string
}

const GamePage = ({ playerName }: GamePageProps) => {
    return <MemCard playerName={playerName} />
}

export default GamePage
