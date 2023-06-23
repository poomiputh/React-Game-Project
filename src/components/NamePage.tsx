import { useEffect, useState } from 'react'
import { Button, Grid } from '@mui/material'
import GamePage from './GamePage'
import { ConfirmName } from './image_components/ImageComponents'

const NamePage = () => {
    const [startContrast, setConfrimContrast] = useState<string>('100%')
    const [playerName, setPlayerName] = useState<string>('Player')
    const [isStartGame, setIsStartGame] = useState<boolean>(false)

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
                <GamePage playerName={playerName} />
            ) : (
                <Grid
                    container
                    justifyContent={'center'}
                    spacing={2}
                    marginTop={0}
                    style={{
                        position: 'fixed',
                        zIndex: '2',
                        top: '30vh',
                    }}
                >
                    <Grid item>
                        <div style={{ maxWidth: '35vw' }}>
                            How To Play <br />
                            1. Random sequence of cards will be revealed at the
                            start of the round. <br />
                            2. Memorize the sequence then choose the card
                            accordingly.
                        </div>
                    </Grid>
                    <Grid item style={{ paddingTop: '4vh' }}>
                        <input
                            className="text_box"
                            onChange={onChangeName}
                            placeholder="Player Name"
                            type="text"
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
            )}
        </>
    )
}

export default NamePage
