import { Button, Grid } from '@mui/material'
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

    const [startContrast, setStartContrast] = useState<string>('100%')
    const handleStartButton = () => {
        setIsStart(true)
    }
    const handleStartEnter = () => {
        setStartContrast('150%')
    }
    const handleStartLeave = () => {
        setStartContrast('100%')
    }

    const [scoreContrast, setScoreContrast] = useState<string>('100%')
    const handleScoreButton = () => {
        setIsStart(true)
    }
    const handleScoreEnter = () => {
        setScoreContrast('150%')
    }
    const handleScoreLeave = () => {
        setScoreContrast('100%')
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
                                        filter:
                                            'contrast(' + startContrast + ')',
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
                                        filter:
                                            'contrast(' + scoreContrast + ')',
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
