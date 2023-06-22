import { Button, Grid, Typography } from '@mui/material'
import { useState } from 'react'
import {
    StartGameButton,
    ScoreGameButton,
} from './image_components/ImageComponents'
import NamePage from './NamePage'
import castleBG from '../images/castleBG_1.svg'
import cloudBG from '../images/cloudBG_1.svg'
import titleBG from '../images/title_1.svg'

const HomePage = () => {
    const [isStart, setIsStart] = useState<boolean>(false)

    const [startOpacity, setStartOpacity] = useState<string>('100%')
    const handleStartButton = () => {
        setIsStart(true)
    }
    const handleStartEnter = () => {
        setStartOpacity('50%')
    }
    const handleStartLeave = () => {
        setStartOpacity('100%')
    }

    const [scoreOpacity, setScoreOpacity] = useState<string>('100%')
    const handleScoreButton = () => {
        setIsStart(true)
    }
    const handleScoreEnter = () => {
        setScoreOpacity('50%')
    }
    const handleScoreLeave = () => {
        setScoreOpacity('100%')
    }

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
                {isStart ? (
                    <>
                        <NamePage />
                    </>
                ) : (
                    <>
                        <div
                            className="bg"
                            style={{
                                backgroundImage: `url(${titleBG})`,
                                zIndex: '1',
                            }}
                        ></div>
                        <Grid
                            container
                            justifyContent={'center'}
                            style={{
                                position: 'fixed',
                                zIndex: '2',
                                top: '35vh',
                            }}
                        >
                            <Grid item>
                                <Button
                                    style={{
                                        backgroundColor: 'transparent',
                                        filter: 'opacity(' + startOpacity + ')',
                                    }}
                                    onClick={handleStartButton}
                                    onMouseEnter={handleStartEnter}
                                    onMouseLeave={handleStartLeave}
                                >
                                    <StartGameButton />
                                </Button>
                            </Grid>
                        </Grid>
                        <Grid
                            container
                            justifyContent={'center'}
                            style={{
                                position: 'fixed',
                                zIndex: '2',
                                top: '49vh',
                            }}
                        >
                            <Grid item>
                                <Button
                                    style={{
                                        backgroundColor: 'transparent',
                                        filter: 'opacity(' + scoreOpacity + ')',
                                    }}
                                    onClick={handleScoreButton}
                                    onMouseEnter={handleScoreEnter}
                                    onMouseLeave={handleScoreLeave}
                                >
                                    <ScoreGameButton />
                                </Button>
                            </Grid>
                        </Grid>
                    </>
                )}
            </div>
        </>
    )
}

export default HomePage
