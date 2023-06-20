import { TextField } from '@mui/material'
import { useState } from 'react'
import ShowNameAndAge from './ShowNameAndAge'

function InputMyNameAndAge() {
    const [name, setName] = useState<string>("")

    const [age, setAge] = useState<number>(0)

    const onChangeAgeCB = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAge(Number(e.target.value))
    }

    const onChangeNameCB = (e: React.ChangeEvent<HTMLInputElement>) => {        
        const nameValue = e.target.value

        setName(nameValue)
    }

    return (
        <div>
            <TextField onChange={onChangeNameCB} label="Name" />
            <TextField onChange={onChangeAgeCB} label="Age" />

            <ShowNameAndAge 
                name={name}
                age={age}
            />
        </div>
    )
}
export default InputMyNameAndAge
