import { useLocation, useNavigate } from 'react-router-dom'
import { ProjectName } from '../App'
import { IScoreRequest, getAllAppScores } from '../api/scoreApi'
import { useEffect, useState } from 'react'
import ScoreLists from './ScorePage/ScoreLists'
import { Button, Grid, Skeleton, Typography } from '@mui/material'
import { ReTurnToHome } from './image_components/ImageComponents'
import castleBG from '../images/castleBG_1.svg'
import cloudBG from '../images/cloudBG_1.svg'

const ScorePage = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true)

    const [startOpacity, setBackOpacity] = useState<string>('100%')
    const handleBackEnter = () => {
        setBackOpacity('50%')
    }
    const handleBackLeave = () => {
        setBackOpacity('100%')
    }
    const navigate = useNavigate()

    const [scoresList, setScoresList] = useState<IScoreRequest[]>([])

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
            setIsLoading(true)
            await getAllAppScores(ProjectName).then((result) => {
                let orderedResult = [...result!]
                orderedResult = orderedResult.sort((a, b) => {
                    return b.score - a.score
                })
                setScoresList(orderedResult)
            })
            setIsLoading(false)
        } catch (error) {
            console.log('addAppScore Error : ', error)
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
                            marginTop: '100px',
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
                                    style={{ padding: '20px 0 0 10px' }}
                                >
                                    Name
                                </Grid>
                                <Grid
                                    item
                                    xs={4}
                                    style={{
                                        display: 'grid',
                                        placeItems: 'center',
                                        padding: '20px 0 0 0',
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
                            <ScoreLists
                                scoreLists={scoresList}
                                onDeleteSuccess={handleDeleteSuccess}
                            />
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

export default ScorePage
