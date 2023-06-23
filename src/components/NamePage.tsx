import { useEffect, useState } from 'react'
import { Button, Grid } from '@mui/material'
import GamePage from './GamePage'
import { BackBtn, ConfirmName } from './image_components/ImageComponents'

const NamePage = () => {
    const [startContrast, setConfrimContrast] = useState<string>('100%')
    const [playerName, setPlayerName] = useState<string>('Player')
    const [isStartGame, setIsStartGame] = useState<boolean>(false)

    const [backContrast, setBackContrast] = useState<string>('100%')

    const goToBack = () => {
        window.location.reload()
    }
    const handleBackEnter = () => {
        setBackContrast('150%')
    }
    const handleBackLeave = () => {
        setBackContrast('100%')
    }

    const handleConfrimEnter = () => {
        setConfrimContrast('150%')
    }
    const handleConfrimLeave = () => {
        setConfrimContrast('100%')
    }
    const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPlayerName(e.target.value)
    }
    const handleConfirm = () => {
        setIsStartGame(true)
    }

    useEffect(() => {
        console.log('Name = ', playerName)
    }, [playerName])

    return (
        <>
            {isStartGame ? (
                <>
                    <GamePage playerName={playerName} />
                </>
            ) : (
                <>
                    <Grid
                        container
                        spacing={2}
                        paddingTop={'2vh'}
                        marginTop={0}
                        style={{ position: 'relative', zIndex: '2' }}
                    >
                        <Grid item>
                            <Button
                                style={{
                                    backgroundColor: 'transparent',
                                    filter: 'contrast(' + backContrast + ')',
                                }}
                                onMouseEnter={handleBackEnter}
                                onMouseLeave={handleBackLeave}
                                onClick={goToBack}
                            >
                                <BackBtn></BackBtn>
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        justifyContent={'center'}
                        spacing={2}
                        marginTop={0}
                        style={{
                            position: 'fixed',
                            zIndex: '2',
                            top: '15vh',
                        }}
                    >
                        <Grid item>
                            <div style={{ maxWidth: '60vw', fontSize: '2vh' }}>
                                How To Play <br />
                                <br />
                                1. Random sequence of cards will be revealed at
                                the start of each round.
                                <br />
                                2. The number of cards will increase every 3
                                round until there are 6 cards on the board. (9
                                rounds in total)
                                <br />
                                3. Memorize the sequence then choose the card
                                accordingly.
                            </div>
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        justifyContent={'center'}
                        spacing={2}
                        marginTop={0}
                        style={{
                            position: 'fixed',
                            zIndex: '2',
                            top: '40vh',
                        }}
                    >
                        <Grid item style={{ paddingTop: '4vh' }}>
                            <input
                                className="text_box"
                                onChange={onChangeName}
                                placeholder="Player Name"
                                type="text"
                                style={{ maxWidth: '25vh', minHeight: '3vh' }}
                            ></input>
                        </Grid>
                        <Grid item>
                            <Button
                                style={{
                                    backgroundColor: 'transparent',
                                    filter: 'contrast(' + startContrast + ')',
                                }}
                                onMouseEnter={handleConfrimEnter}
                                onMouseLeave={handleConfrimLeave}
                                onClick={handleConfirm}
                            >
                                <ConfirmName></ConfirmName>
                            </Button>
                        </Grid>
                    </Grid>
                </>
            )}
        </>
    )
}

export default NamePage
