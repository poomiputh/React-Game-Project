import { useLocation, useNavigate } from 'react-router-dom'
import { ProjectName } from '../App'
import {
    IScoreRequest,
    addAppScore,
    getAllAppScores,
    deleteAppScore,
} from '../api/scoreApi'
import { useEffect, useState } from 'react'
import ScoreLists from './ScorePage/ScoreLists'
import { Button, Grid, Typography } from '@mui/material'
import MatApp from './MatApp'

const GameEndPage = () => {
    const navigate = useNavigate()

    const location = useLocation()
    const [scoresList, setScoresList] = useState<IScoreRequest[]>([])

    const appScore = {
        name: location.state.playerName,
        score: location.state.score,
        projectName: ProjectName,
    }

    const goToHome = () => {
        navigate('/')
    }

    const handleDeleteSuccess = (deleteScoreID: number) => {
        setScoresList((prev) => {
            return prev.filter((score) => score.id !== deleteScoreID)
        })
    }

    const onLoaded = async () => {
        try {
            await getAllAppScores(ProjectName).then(async (result) => {
                console.log('result', result)
                if (result!.length === 0) {
                    await addAppScore(appScore)
                } else {
                    const isExist = result!.find((e) => {
                        return e.name === location.state.playerName
                    })
                    if (isExist === undefined) {
                        await addAppScore(appScore)
                    } else {
                        if (isExist.score < location.state.score) {
                            await deleteAppScore(isExist.id!)
                            await addAppScore(appScore)
                        }
                    }
                }
            })
        } catch (error) {
            console.log('addAppScore Error : ', error)
        } finally {
            getAllAppScores(ProjectName).then((result) => {
                setScoresList(result!)
            })
        }
    }

    useEffect(() => {
        onLoaded()
    }, [])

    useEffect(() => {
        console.log(scoresList)
    }, [scoresList])

    return (
        <>
            <MatApp>
                <Grid container>
                    <Typography>Your score: {location.state.score}</Typography>
                    <Typography>Scoreboard</Typography>
                    <ScoreLists
                        scoreLists={scoresList}
                        onDeleteSuccess={handleDeleteSuccess}
                    />
                    <Button onClick={goToHome} variant="outlined">
                        Return to menu
                    </Button>
                </Grid>
            </MatApp>
        </>
    )
}

export default GameEndPage
