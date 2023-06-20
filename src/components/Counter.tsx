import { Button, Typography } from "@mui/material"
import { useState } from "react"

function Counter () {
    const [count, setCount] = useState<number>(0)
    const onClickPlus = () => {
        setCount(prevCount => prevCount + 1)
    }

    const onClickMinus = () => {
        setCount(prevCount => prevCount - 1)
    }

    console.log("rendering:", count)
    return (
        <>
        <Typography variant="h1">
            Counter: {count}
        </Typography>

            <Button 
                variant="contained"
                onClick={onClickPlus}
                size="large"
                style={{
                    marginRight: "20px"
                }}
            >
                PLUS
            </Button>

            <Button 
                variant="contained"
                onClick={onClickMinus}
                size="large"
            >
                Minus
            </Button>


            {count % 2 === 0 && <Typography variant="h4">Awesome</Typography>}
        </>
    )
}
export default Counter