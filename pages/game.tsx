import {useEffect, useState} from "react"
import {useRouter} from "next/router"
import styled from "@emotion/styled"
import MainLayout from "../components/MainLayout"

const wordsArray = [
    "Человек",
    "год",
    "время",
    "дело",
    "жизнь",
    "день",
    "рука",
    "раз",
    "работа",
    "слово",
    "место",
    "лицо",
    "друг",
    "глаз",
    "вопрос",
    "дом",
    "сторона",
    "страна",
    "мир",
    "случай",
    "голова",
    "ребенок",
    "сила",
    "конец",
    "вид",
    "система",
    "часть",
    "город",
    "отношение",
    "женщина",
    "деньги",
    "земля",
    "машина",
    "вода",
    "отец",
    "проблема",
    "час",
    "право",
    "нога",
    "решение",
    "дверь",
    "образ",
    "история",
    "власть",
    "закон",
    "война",
    "бог",
    "голос",
    "тысяча",
    "книга",
    "возможность",
    "результат",
    "ночь",
    "стол",
    "имя",
    "область",
    "статья",
    "число",
    "компания",
    "народ",
    "жена",
    "группа",
    "развитие",
    "процесс",
    "суд",
    "условие",
    "средство",
    "начало",
    "свет",
    "пора",
    "путь",
    "душа",
    "уровень",
    "форма",
    "связь",
    "минута",
    "улица",
    "вечер",
    "качество",
    "мысль",
    "дорога",
    "мать",
    "действие",
    "месяц",
    "государство",
    "язык",
    "любовь",
    "взгляд",
    "мама",
    "век",
    "школа",
    "цель",
    "общество",
    "деятельнось",
    "организация",
    "президент",
    "комната"
]

export default function Game() {
    const router = useRouter()
    const query = router.query
    // const query = {
    //     wordCount: '3',
    //     charCount: '5',
    //     startDistance: '40',
    //     distanceStep: '40',
    //     showTime: '5'
    // }
    // console.log(query)
    const [sepWidth, setSepWidth] = useState(((+query.startDistance - 5) / 5) * 0.75 + 5)
    const [dictionary] = useState(() => makeWordArray())
    const [currentWordIndex, setCurrentWordIndex] = useState(0)
    const [gameFinished, setGameFinished] = useState(false)

    function makeWordArray() {
        const arr = wordsArray.filter((word) => word.length === +query.charCount)
        return shuffleArray(arr).slice(0, +query.wordCount)
    }

    function shuffleArray(target) {
        let array = target
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array
    }

    const BasicDiv = ({className, children}) => (
        <div className={className}>
            {children}
        </div>
    )

    const Word = styled(BasicDiv)`
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    `
    const Span = styled.span`
        font-weight: 900;
        line-height: 70px;
        color: #371548;
        text-transform: uppercase;
    `
    const Separator = styled.span`
        width: ${sepWidth}%;
        color: #371548;
        text-align: center;
    `
    const Congrats = styled.span`
        font-weight: bold;
        font-size: 64px;
        line-height: 75px;
        color: #2B3172;
    `

    function changeCurrentWord() {
        if (currentWordIndex < dictionary.length) {
            return setTimeout(() => {
                setSepWidth(prev => prev + +query.distanceStep / 5)
                setCurrentWordIndex(prev => prev + 1)
            }, +query.showTime * 1000)
        }
        setGameFinished(true)
        return
    }

    function cutWord(word) {
        if (word) {
            const len = word.length
            return {
                part1: word.slice(0, Math.round(len / 2)),
                part2: word.slice(Math.round(len / 2))
            }
        }
    }

    useEffect(() => {
        changeCurrentWord()
    }, [currentWordIndex])

    return (
        <MainLayout>
            {
                gameFinished
                    ? <>
                        <img src="./images/sf_success.png" alt="Finish!"/>
                        <Congrats>Отличная работа!</Congrats>
                    </>
                    : <Word className={'gameContainer'}>
                        <Span className={'wordPart'}>
                            {cutWord(dictionary[currentWordIndex])?.part1}
                        </Span>
                        <Separator className={'separator'}>~</Separator>
                        <Span className={'wordPart'}>
                            {cutWord(dictionary[currentWordIndex])?.part2}
                        </Span>
                    </Word>
            }
        </MainLayout>    )
}
