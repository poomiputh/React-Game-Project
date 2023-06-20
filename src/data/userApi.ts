import user from './user.json'

const sleep = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

const getUser = async () => {
    await sleep(1500)

    return user
}

export default getUser
