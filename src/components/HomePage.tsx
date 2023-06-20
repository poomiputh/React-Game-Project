import { Button, Grid, Typography } from '@mui/material'
import { useState } from 'react'
import NamePage from './NamePage'
import MatApp from './MatApp'
import titleBG from '../images/titleBG.svg'

const HomePage = () => {
    const [isStart, setIsStart] = useState<boolean>(false)
    const handleStartButton = () => {
        setIsStart(true)
    }

    const startGame = (
        <Button style={{ backgroundColor: 'transparent' }}>
            <img
                src="src\images\startGame.svg"
                style={{ minHeight: 80 }}
                onClick={handleStartButton}
            ></img>
        </Button>
    )

    // const titleBG = (
    //     <img
    //         src="src\images\titleBG.svg"
    //         style={{ minHeight: 500 }}
    //         onClick={handleStartButton}
    //     ></img>
    // )

    return (
        <>
            <MatApp>
                <div
                    style={{
                        backgroundImage: `url(${titleBG})`,
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
                            {/* <Grid container justifyContent={'center'}>
                            <Grid item>{titleBG}</Grid>
                        </Grid> */}
                            <Grid container justifyContent={'center'}>
                                <Grid item>
                                    <Typography
                                        variant="h2"
                                        style={{ color: 'white' }}
                                    >
                                        Fun Card Game :D
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid container justifyContent={'center'}>
                                <Grid item>{startGame}</Grid>
                            </Grid>
                        </>
                    )}
                </div>
            </MatApp>
        </>
    )
}

export default HomePage
