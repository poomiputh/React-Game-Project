import { useLocation } from 'react-router-dom'
import { ProjectName } from '../App'
import { IScoreRequest, addAppScore, getAllAppScores } from '../api/scoreApi'
import { useEffect, useState } from 'react'
import ScoreLists from './ScorePage/ScoreLists'

const GameEndPage = () => {
    const location = useLocation()
    const [scoresList, setScoresList] = useState<IScoreRequest[]>([])
    const appScore = {
        name: location.state.playerName,
        score: location.state.score,
        projectName: ProjectName,
    }

    console.log(appScore)

    const onLoaded = async () => {
        try {
            await addAppScore(appScore)
        } catch (error) {
            console.log('addAppScore Error')
        }
    }

    const handleDeleteSuccess = (deleteScoreID: number) => {
        setScoresList((prev) => {
            return prev.filter((score) => score.id !== deleteScoreID)
        })
    }

    useEffect(() => {
        onLoaded()
        getAllAppScores(ProjectName).then((result) => {
            setScoresList(result!)
        })
    }, [])

    useEffect(() => {
        console.log(scoresList)
    }, [scoresList])

    return (
        <>
            <ScoreLists
                scoreLists={scoresList}
                onDeleteSuccess={handleDeleteSuccess}
            ></ScoreLists>
        </>
    )
}

export default GameEndPage
