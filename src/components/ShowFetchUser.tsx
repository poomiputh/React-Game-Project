import { Button, CircularProgress, Grid } from '@mui/material'
import ShowUserJSON, { IUser } from './ShowUserJson'
import { useState } from 'react'
import getUser from '../data/userApi'

function ShowFetchUser() {
    const [user, setUser] = useState<IUser>()
    const [loading, setLoading] = useState<boolean>(false)
    const onClickFetchUser = async () => {
        setUser(undefined)
        setLoading(true)
        const result = await getUser()
        setUser(result)
        setLoading(false)
    }

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Button onClick={onClickFetchUser} 
                    variant="contained"
                >
                    Get User
                </Button>
            </Grid>
            <Grid item>
                {loading && <CircularProgress />}
                {user && <ShowUserJSON user={user} />}
            </Grid>
        </Grid>
    )
}

export default ShowFetchUser
