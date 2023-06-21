import {
    Grid,
    Card,
    CardActionArea,
    CardContent,
    Typography,
} from '@mui/material'
import { useLayoutEffect, useRef } from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { sleep } from '../data/userApi'
import { KingCard_1, QueenCard_1 } from './image_components/ImageComponents'

const shuffleNumArray = (numArray: number[]) => {
    const shuffledNumbers = [...numArray]
    for (let i = shuffledNumbers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[shuffledNumbers[i], shuffledNumbers[j]] = [
            shuffledNumbers[j],
            shuffledNumbers[i],
        ]
    }
    return shuffledNumbers
}

interface MemCardProps {
    playerName: string
}

const MemCard = ({ playerName }: MemCardProps) => {
    const navigate = useNavigate()

    const [tileNum, setTileNum] = useState<number>(4)
    const [ranSeq, setRanSeq] = useState<number[]>(
        shuffleNumArray(
            Array.from({ length: tileNum }, (_, index) => index + 1),
        ),
    )
    const [playerSeq, setPlayerSeq] = useState<number[]>([])
    const [playerScore, setPlayerScore] = useState<number>(0)
    const [displayCards, setDisplayCards] = useState<number[]>([0, ...ranSeq])

    const goToResult = () => {
        navigate('/result', {
            state: { score: playerScore, playerName: playerName },
        })
    }

    const cycleSeq = async (cycleMs: number) => {
        const tempArray = [...displayCards]
        await sleep(cycleMs)
        const first = tempArray.shift()
        setDisplayCards(tempArray)
    }

    const checkWin = () => {
        const areEqual = JSON.stringify(playerSeq) === JSON.stringify(ranSeq)
        if (areEqual) {
            setPlayerScore(playerScore + 1)
            setPlayerSeq([])
            setTileNum(tileNum + 1)
        } else if (!areEqual) {
            goToResult()
        }
    }

    const handleCardClick = (cardIndex: number) => {
        if (playerSeq) {
            const tempArray = [...playerSeq]
            tempArray.push(cardIndex)
            setPlayerSeq(tempArray)
        } else {
            const tempArray = []
            tempArray.push(cardIndex)
            setPlayerSeq(tempArray)
        }
    }

    let firstUpdate = useRef(true)
    useLayoutEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false
        } else {
            console.log('tileNum : ', tileNum)
            setRanSeq(
                shuffleNumArray(
                    Array.from({ length: tileNum }, (_, index) => index + 1),
                ),
            )
        }
        if (tileNum >= 7) {
            goToResult()
        }
    }, [tileNum])

    useEffect(() => {
        console.log('ranSeq : ', ranSeq)
        setDisplayCards([0, ...ranSeq])
    }, [ranSeq])

    useEffect(() => {
        console.log('displayCards : ', displayCards)
    }, [displayCards])

    useEffect(() => {
        if (displayCards.length !== 0) {
            cycleSeq(1000)
        }
        if (playerSeq.length === ranSeq.length) {
            checkWin()
        }
    })

    useEffect(() => {
        console.log(playerSeq)
    }, [playerSeq])

    useEffect(() => {
        console.log('Score : ', playerScore)
    }, [playerScore])

    const generateCard = () => {
        const gameCards: any[] = [
            <KingCard_1 opacity="100%" maxHeight={150} />,
            <QueenCard_1 opacity="100%" maxHeight={150} />,
            <KingCard_1 opacity="100%" maxHeight={150} />,
            <KingCard_1 opacity="100%" maxHeight={150} />,
            <KingCard_1 opacity="100%" maxHeight={150} />,
            <KingCard_1 opacity="100%" maxHeight={150} />,
        ]
        let cards: any[] = []
        ranSeq.forEach((e, i) => {
            cards.push(
                <Grid item key={'G-' + (i + 1)} xs={2} md={2} lg={2}>
                    {i + 1 === displayCards[0] ? (
                        <Card
                            key={'C-' + (i + 1)}
                            style={{ backgroundColor: 'lightgreen' }}
                        >
                            <CardActionArea
                                disabled={true}
                                onClick={() => handleCardClick(i + 1)}
                            >
                                <CardContent>
                                    <Grid container justifyContent={'center'}>
                                        {gameCards[i]}
                                    </Grid>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    ) : (
                        <Card key={'C-' + (i + 1)}>
                            {displayCards.length !== 0 ? (
                                <CardActionArea
                                    disabled={true}
                                    onClick={() => handleCardClick(i + 1)}
                                >
                                    <CardContent>
                                        <Grid
                                            container
                                            justifyContent={'center'}
                                        >
                                            {gameCards[i]}
                                        </Grid>
                                    </CardContent>
                                </CardActionArea>
                            ) : (
                                <CardActionArea>
                                    <CardContent>
                                        <Grid
                                            container
                                            justifyContent={'center'}
                                        >
                                            {gameCards[i]}
                                        </Grid>
                                    </CardContent>
                                </CardActionArea>
                            )}
                        </Card>
                    )}
                </Grid>,
            )
        })
        return cards
    }

    return (
        <>
            <Grid container spacing={2} paddingTop={2} paddingLeft={3}>
                <Grid item xs={12} md={12} lg={12}>
                    <Typography variant="h5">
                        {playerName}'s Score : {playerScore}
                    </Typography>
                </Grid>
            </Grid>
            <Grid
                container
                spacing={2}
                paddingTop={3}
                justifyContent={'center'}
            >
                {generateCard()}
            </Grid>
        </>
    )
}

export default MemCard
