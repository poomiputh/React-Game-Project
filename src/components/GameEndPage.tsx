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
import { Button, Grid, Skeleton, Typography } from '@mui/material'
import { ReTurnToHome } from './image_components/ImageComponents'
import castleBG from '../images/castleBG_1.svg'
import cloudBG from '../images/cloudBG_1.svg'

const GameEndPage = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true)
    const [isEmpty, setIsEmpty] = useState<boolean>()

    const [startOpacity, setBackOpacity] = useState<string>('100%')
    const handleBackEnter = () => {
        setBackOpacity('50%')
    }
    const handleBackLeave = () => {
        setBackOpacity('100%')
    }
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
        setIsEmpty(true)
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
            setIsLoading(true)
            await getAllAppScores(ProjectName).then((result) => {
                let orderedResult = [...result!]
                orderedResult = orderedResult.sort((a, b) => {
                    return b.score - a.score
                })
                if (orderedResult.length === 0) {
                    setIsEmpty(true)
                } else {
                    setIsEmpty(false)
                }
                setScoresList(orderedResult)
            })
            setIsLoading(false)
        }
    }

    useEffect(() => {
        onLoaded()
    }, [])

    useEffect(() => {
        console.log(isLoading)
    }, [isLoading])

    useEffect(() => {
        console.log(scoresList)
    }, [scoresList])

    return (
        <>
            <div
                style={{
                    backgroundImage: `url(${castleBG})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    width: '100%',
                    height: '100vh',
                    position: 'relative',
                    zIndex: '0',
                }}
            >
                <div
                    className="bg_cloud"
                    style={{ backgroundImage: `url(${cloudBG})` }}
                ></div>
                <Grid
                    container
                    style={{
                        // minWidth: '960px',
                        maxWidth: '80vh',
                        margin: 'auto',
                    }}
                >
                    <Grid
                        item
                        xs={12}
                        className="text_box"
                        style={{
                            marginTop: '10vh',
                            backgroundColor: 'white',
                            zIndex: '1',
                        }}
                    >
                        <Grid item xs={12}>
                            <Typography
                                style={{
                                    fontFamily: 'Public Pixel',
                                    fontSize: '30px',
                                    display: 'grid',
                                    placeItems: 'center',
                                    paddingLeft: '10px',
                                }}
                            >
                                Your score: {location.state.score}
                            </Typography>
                            <Typography
                                style={{
                                    fontFamily: 'Public Pixel',
                                    fontSize: '30px',
                                    display: 'grid',
                                    paddingLeft: '10px',
                                }}
                            >
                                Scoreboard
                            </Typography>
                        </Grid>

                        <Grid
                            item
                            xs={12}
                            style={
                                {
                                    // display: 'grid',
                                    // placeItems: 'center',
                                }
                            }
                        >
                            <Grid container>
                                <Grid
                                    item
                                    xs={6}
                                    style={{ margin: '3vh 0 0 1.5vh' }}
                                >
                                    Name
                                </Grid>
                                <Grid
                                    item
                                    xs={4}
                                    style={{
                                        display: 'grid',
                                        placeItems: 'center',
                                        margin: '3vh 0 0 1vh',
                                    }}
                                >
                                    Score
                                </Grid>
                            </Grid>
                            {isLoading ? (
                                <>
                                    <Skeleton
                                        variant="rounded"
                                        width={'100%'}
                                        height={'4vh'}
                                        style={{ marginTop: 25 }}
                                    />
                                </>
                            ) : (
                                <></>
                            )}
                            {isEmpty ? (
                                <>
                                    <div
                                        style={{
                                            marginLeft: '1.5vh',
                                            marginTop: '2vh',
                                        }}
                                    >
                                        <Typography
                                            style={{
                                                fontFamily: 'Public Pixel',
                                            }}
                                        >
                                            No Score Records
                                        </Typography>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <ScoreLists
                                        scoreLists={scoresList}
                                        onDeleteSuccess={handleDeleteSuccess}
                                    />
                                </>
                            )}
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            style={{
                                display: 'grid',
                                placeItems: 'center',
                            }}
                        >
                            <Button
                                style={{
                                    backgroundColor: 'transparent',
                                    filter: 'opacity(' + startOpacity + ')',
                                }}
                                onMouseEnter={handleBackEnter}
                                onMouseLeave={handleBackLeave}
                                onClick={goToHome}
                            >
                                <ReTurnToHome></ReTurnToHome>
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default GameEndPage
