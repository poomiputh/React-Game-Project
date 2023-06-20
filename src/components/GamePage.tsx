import MemCardRef from './MemCardRef'
interface GamePageProps {
    playerName: string
}

const GamePage = ({ playerName }: GamePageProps) => {
    return <MemCardRef playerName={playerName} />
}

export default GamePage
