import { useEffect } from "react"

interface ShowNameAndAgeProps {
    name: string
    age: number
}

function ShowNameAndAge({name, age}
    : ShowNameAndAgeProps) {

    useEffect(() => {
        console.log('trigger only once when component is mounted')
    }, [])

    useEffect(() => {
        console.log('trigger when age is changed')
    }, [age])

    useEffect(() => {
        console.log('trigger when name is changed')
    }, [name])

    useEffect(() => {
        console.log('trigger when age or name is changed')
    }, [age, name])

    useEffect(() => {
        console.log('triggers alway')
    })

    useEffect(() => {
        if (age > 30) {
            console.log('trigger when age is greater than 30')
        }
    }, [age])
    
    return <div>
        <h1>My name is {name}</h1>
        <h1>My Age: {age}</h1>

        {age > 18 && <h1>Go to Vote</h1> }

        {age > 18 ? <h1>Go to Vote</h1> : <h1>Go to School</h1> }

        {(age > 20 && age <50) && <h1>Go to Pub</h1> }
    </div>
}


export default ShowNameAndAge