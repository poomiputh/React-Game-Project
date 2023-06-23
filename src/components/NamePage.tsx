import { useEffect, useState } from 'react'
import { Button, Grid, TextField, Typography } from '@mui/material'
import GamePage from './GamePage'
import nameBox from '../images/nameBox.svg'

const NamePage = () => {
    const [playerName, setPlayerName] = useState<string>('Player')
    const [isStartGame, setIsStartGame] = useState<boolean>(false)
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
                    style={{ position: 'relative', zIndex: '2' }}
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
                    {/* <Grid item>
                        <div style={{
                            backgroundImage: `url(${nameBox})`,
                            backgroundPosition: '5%',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            width: '100%',
                            height: '100vh',
                            position: 'fixed',
                            zIndex: '1',
                        }}>
                            Hi
                        </div>
                    </Grid> */}
                    <Grid item>
                        <input
                            className="text_box"
                            onChange={onChangeName}
                            placeholder="Player Name"
                            type="text"
                        ></input>
                        {/* <TextField
                            label="Player Name"
                            variant="outlined"
                            onChange={onChangeName}
                        /> */}
                    </Grid>
                    <Grid item>
                        <Button onClick={handleConfirm} variant="outlined">
                            Confirm
                        </Button>
                    </Grid>
                </Grid>
            )}
        </>
    )
}

export default NamePage
