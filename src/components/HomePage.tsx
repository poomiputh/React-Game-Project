import { Button, Grid, Typography } from '@mui/material'
import { useState } from 'react'
import NamePage from './NamePage'
import MatApp from './MatApp'
import titleBG from '../images/titleBG.svg'
import { StartGameButton, Sonic } from './image_components/ImageComponents'

const HomePage = () => {
    const [isStart, setIsStart] = useState<boolean>(false)
    const [startOpacity, setStartOpacity] = useState<string>('100%')
    const handleStartButton = () => {
        setIsStart(true)
    }
    const handleMouseEnter = () => {
        setStartOpacity('50%')
    }

    const handleMouseLeave = () => {
        setStartOpacity('100%')
    }

    return (
        <>
            <MatApp>
                <div
                    style={{
                        // backgroundImage: `url(${titleBG})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        height: 800,
                    }}
                >
                    {isStart ? (
                        <NamePage />
                    ) : (
                        <>
                            <Grid
                                container
                                justifyContent={'center'}
                                paddingTop={2}
                            >
                                <Grid item>
                                    <Typography variant="h2">
                                        SonicAssCardGame
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid
                                container
                                justifyContent={'center'}
                                paddingTop={0}
                            >
                                <Grid item>
                                    <Sonic />
                                </Grid>
                            </Grid>
                            <Grid
                                container
                                justifyContent={'center'}
                                paddingTop={2}
                            >
                                <Grid item>
                                    <Button
                                        style={{
                                            backgroundColor: 'transparent',
                                            filter:
                                                'opacity(' + startOpacity + ')',
                                        }}
                                        onClick={handleStartButton}
                                        onMouseEnter={handleMouseEnter}
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        <StartGameButton />
                                    </Button>
                                </Grid>
                            </Grid>
                        </>
                    )}
                </div>
            </MatApp>
        </>
    )
}

export default HomePage
