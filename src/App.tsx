import { Button, Grid, Typography } from '@mui/material'
import { useState } from 'react'
import MatApp from './components/MatApp'
import MemCardRef from './components/MemCardRef'
import NamePage from './components/NamePage'

function App() {
    const [isStart, setIsStart] = useState<boolean>(false)
    const handleStartButton = () => {
        setIsStart(true)
    }

    const sonic = (
        <svg
            version="1.0"
            xmlns="http://www.w3.org/2000/svg"
            width="204.000000pt"
            height="247.000000pt"
            viewBox="0 0 204.000000 247.000000"
            preserveAspectRatio="xMidYMid meet"
        >
            <g
                transform="translate(0.000000,247.000000) scale(0.100000,-0.100000)"
                fill="#000000"
                stroke="none"
            >
                <path
                    d="M280 2233 l0 -43 -40 0 -40 0 0 -45 0 -45 40 0 40 0 0 -43 0 -42 45
   3 45 4 0 -46 0 -46 46 0 45 0 -3 -42 -3 -43 -43 0 -42 0 0 -42 0 -43 -45 0
   -45 0 0 -45 0 -45 -40 0 -40 0 0 -40 0 -40 -45 0 -45 0 0 -45 0 -45 176 0 175
   0 -3 -42 c-3 -43 -3 -43 -45 -46 -43 -3 -43 -3 -43 -43 l0 -39 -45 0 -45 0 0
   -45 0 -45 -40 0 -40 0 0 -45 0 -45 300 0 300 0 0 -40 0 -40 -42 0 -43 0 0 -42
   0 -43 -42 -3 -43 -3 0 -84 0 -84 43 -3 42 -3 0 -43 0 -42 43 0 42 0 0 -39 c0
   -40 0 -40 43 -43 l42 -3 3 -82 3 -83 -46 0 -45 0 0 -175 0 -175 560 0 560 0 0
   84 0 85 -42 3 -43 3 0 43 0 42 -42 0 -43 0 0 45 0 45 -85 0 -85 0 0 40 0 40
   -91 0 -90 0 3 43 3 42 128 3 127 3 0 84 0 85 45 0 45 0 0 130 0 130 -45 0 -45
   0 0 85 0 85 45 0 45 0 0 85 0 85 43 0 42 0 0 45 0 45 -42 0 -43 0 0 85 0 85
   43 0 42 0 0 130 0 130 -42 0 -43 0 0 173 0 172 -87 0 -88 0 4 -42 3 -43 -131
   0 -131 0 0 43 0 42 -520 0 -520 0 0 -42z m520 -178 l0 -45 46 0 45 0 -3 -37
   c-3 -37 -4 -38 -45 -41 l-43 -3 0 -45 0 -44 -40 0 -40 0 0 130 0 130 40 0 40
   0 0 -45z m600 -255 l0 -40 45 0 45 0 0 -45 0 -45 -45 0 -45 0 0 -130 0 -130
   45 0 45 0 0 46 0 45 43 -3 42 -3 0 -43 0 -42 43 0 42 0 0 -86 0 -86 -45 4 -45
   3 0 -42 0 -43 -295 0 -295 0 0 43 0 42 -45 -3 -45 -4 0 86 0 86 130 0 130 0 0
   45 0 45 -45 0 -45 0 0 130 0 130 45 0 45 0 0 40 0 40 125 0 125 0 0 -40z m260
   -215 l0 -85 -40 0 -40 0 0 85 0 85 40 0 40 0 0 -85z m-690 -475 l0 -40 -40 0
   -40 0 0 40 0 40 40 0 40 0 0 -40z m-85 -85 l0 -40 -40 0 c-36 0 -40 2 -43 28
   -6 47 4 59 45 55 37 -3 38 -4 38 -43z m515 -126 l0 -169 -40 0 -40 0 0 40 0
   40 -46 0 -46 0 4 45 3 45 -42 0 -43 0 0 84 0 85 125 0 125 0 0 -170z m-600 41
   l0 -40 -40 0 -40 0 0 40 0 40 40 0 40 0 0 -40z m260 -2 l0 -43 42 0 43 0 0
   -85 0 -85 -42 -3 c-43 -3 -43 -3 -43 -43 l0 -39 -85 0 -85 0 0 43 0 42 -45 -3
   -46 -4 3 88 3 89 43 0 42 0 0 43 0 42 85 0 85 0 0 -42z m600 -43 l0 -85 -42 0
   -43 0 0 -42 0 -43 -42 -3 -43 -3 0 130 0 131 85 0 85 0 0 -85z m-80 -475 l0
   -40 -45 0 -45 0 0 40 0 40 45 0 45 0 0 -40z m-350 -85 l0 -45 -40 0 -40 0 0
   -40 0 -40 -45 0 -45 0 0 40 0 40 45 0 45 0 0 45 0 45 40 0 40 0 0 -45z"
                />
            </g>
        </svg>
    )

    const startGame = (
        <Button style={{ backgroundColor: 'transparent' }}>
            <img
                src="src\images\startGame.svg"
                style={{ minHeight: 80 }}
                onClick={handleStartButton}
            ></img>
        </Button>
    )

    return (
        <>
            <MatApp>
                {isStart ? (
                    <NamePage />
                ) : (
                    <>
                        <Grid container justifyContent={'center'}>
                            <Grid item>{sonic}</Grid>
                        </Grid>
                        <Grid container justifyContent={'center'}>
                            <Grid item>
                                <Typography variant="h2">
                                    Fun Card Game :D
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container justifyContent={'center'}>
                            <Grid item>{startGame}</Grid>
                        </Grid>
                    </>
                )}
            </MatApp>
        </>
    )
}

export default App
