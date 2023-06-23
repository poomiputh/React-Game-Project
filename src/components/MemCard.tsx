import { Button, Grid, Typography } from '@mui/material'
import { useLayoutEffect, useRef } from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { sleep } from '../data/userApi'
import { BackBtn, MordoxCard } from './image_components/ImageComponents'

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

    const [curRound, setCurRound] = useState<number>(1)
    const [prevTileNum, setPrevTileNum] = useState<number>(4)
    const [tileNum, setTileNum] = useState<number>(4)
    const [ranSeq, setRanSeq] = useState<number[]>(
        shuffleNumArray(
            Array.from({ length: tileNum }, (_, index) => index + 1),
        ),
    )
    const [playerSeq, setPlayerSeq] = useState<number[]>([])
    const [playerScore, setPlayerScore] = useState<number>(0)
    const [displayCards, setDisplayCards] = useState<number[]>([0, ...ranSeq])

    const [clickable, setClickable] = useState<boolean>(false)

    const [backContrast, setBackContrast] = useState<string>('100%')

    const goToBack = () => {
        window.location.reload()
    }
    const handleBackEnter = () => {
        setBackContrast('150%')
    }
    const handleBackLeave = () => {
        setBackContrast('100%')
    }

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
            setTimeout(() => {
                setCurRound(curRound + 1)
                setPlayerScore(playerScore + 1)
                setPlayerSeq([])
                if (curRound % 5 === 0) {
                    setTileNum(tileNum + 1)
                } else {
                    setPrevTileNum(tileNum)
                    setTileNum(0)
                }
            }, 1500)
        } else if (!areEqual) {
            goToResult()
        }
    }

    const handleCardClick = (cardIndex: number) => {
        if (clickable) {
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
    }

    const handleLoaded = () => {
        console.log('Card Loaded')
    }

    let firstUpdate = useRef(true)
    useLayoutEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false
        } else {
            console.log('tileNum : ', tileNum)
            if (tileNum === 0) {
                setTileNum(prevTileNum)
            } else {
                if (tileNum >= 7) {
                    goToResult()
                } else {
                    setRanSeq(
                        shuffleNumArray(
                            Array.from(
                                { length: tileNum },
                                (_, index) => index + 1,
                            ),
                        ),
                    )
                }
            }
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
            setClickable(false)
            cycleSeq(1000)
        } else {
            setClickable(true)
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

    const gameCards = (index: number, isFlipped: boolean) => {
        const gameCards: any[] = [
            <MordoxCard
                isFlipped={isFlipped}
                src="src\images\kingCard_1.svg"
            />,
            <MordoxCard
                isFlipped={isFlipped}
                src="src\images\queenCard_1.svg"
            />,
            <MordoxCard
                isFlipped={isFlipped}
                src="src\images\kingCard_2.svg"
            />,
            <MordoxCard
                isFlipped={isFlipped}
                src="src\images\queenCard_2.svg"
            />,
            <MordoxCard
                isFlipped={isFlipped}
                src="src\images\knightCard_1.svg"
            />,
            <MordoxCard
                isFlipped={isFlipped}
                src="src\images\knightCard_2.svg"
            />,
        ]
        return gameCards[index]
    }

    const generateCard = () => {
        let cards: any[] = []
        ranSeq.forEach((e, i) => {
            cards.push(
                <Grid item key={'G-' + (i + 1)}>
                    {i + 1 === displayCards[0] ? (
                        <div className="card is-flipped">
                            {gameCards(i, false)}
                        </div>
                    ) : (
                        <>
                            {displayCards.length !== 0 ? (
                                <div>{gameCards(i, true)}</div>
                            ) : (
                                <div
                                    className="div-clickable"
                                    onClick={() => {
                                        handleCardClick(i + 1)
                                    }}
                                >
                                    {playerSeq.includes(i + 1) ? (
                                        <div className="card is-flipped">
                                            {gameCards(i, false)}
                                        </div>
                                    ) : (
                                        <div>{gameCards(i, true)}</div>
                                    )}
                                </div>
                            )}
                        </>
                    )}
                </Grid>,
            )
        })
        return cards
    }

    return (
        <>
            {/* <Grid
                container
                spacing={2}
                paddingTop={2}
                paddingLeft={3}
                marginTop={0}
                style={{ position: 'relative', zIndex: '2' }}
            >
                <Grid item xs={12} md={12} lg={12}>
                    <Typography variant="h5">
                        {playerName}'s Score : {playerScore}
                    </Typography>
                </Grid>
            </Grid> */}
            <Grid
                container
                spacing={2}
                paddingTop={'2vh'}
                marginTop={0}
                style={{ position: 'relative', zIndex: '2' }}
            >
                <Grid item>
                    <Button
                        style={{
                            backgroundColor: 'transparent',
                            filter: 'contrast(' + backContrast + ')',
                        }}
                        onMouseEnter={handleBackEnter}
                        onMouseLeave={handleBackLeave}
                        onClick={goToBack}
                    >
                        <BackBtn></BackBtn>
                    </Button>
                </Grid>
                <Grid item>
                    <Typography
                        style={{ fontFamily: 'Public Pixel', fontSize: '3vh' }}
                    >
                        {playerName}'s score : {playerScore}
                    </Typography>
                </Grid>
            </Grid>
            <Grid
                container
                spacing={2}
                paddingTop={'4vh'}
                justifyContent={'center'}
                style={{ position: 'relative', zIndex: '2' }}
            >
                {generateCard()}
            </Grid>
        </>
    )
}

export default MemCard
