import { Card, Grid, Stack, Typography } from '@mui/material'

interface IJob {
    position: string
    company: string
}

interface ICar {
    brand: string
    model: string
    year: number
}

export interface IUser {
    name: string
    age: number
    isDead: boolean
    job: IJob
    cars: ICar[]
    // cars
}

interface ShowUserJSONProps {
    user: IUser
}
function ShowUserJSON({ user }: ShowUserJSONProps) {
    return (
        <Stack>
            <Typography variant="h1">{user.name}</Typography>
            <Typography variant="h4">Age: {user.age}</Typography>
            <Typography variant="h4">Position: {user.job.position}</Typography>
            <Typography variant="h4">Company: {user.job.company}</Typography>

            <Typography variant="h2">Cars:</Typography>
            <Grid container spacing={2}>
                {user.cars.map((itemCar) => {
                    return (
                        <Grid item key={itemCar.brand}>
                            <Card style={{
                                padding: "20px",
                            }}>
                                <Typography>Brand: {itemCar.brand}</Typography>
                                <Typography>Model: {itemCar.model}</Typography>
                                <Typography>Year: {itemCar.year}</Typography>
                            </Card>
                        </Grid>
                    )
                })}
            </Grid>
        </Stack>
    )
}

export default ShowUserJSON
