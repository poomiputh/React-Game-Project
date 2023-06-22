import { useEffect, useState } from 'react'
import { Button, Grid, TextField } from '@mui/material'
import GamePage from './GamePage'

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
