import {useState} from "react"
import styled from "@emotion/styled"
import MainLayout from '../components/MainLayout'
import InputRange from "../components/InputRange/InputRange";
import RangeSteps from "../components/RangeSteps/RangeSteps";
import SpeedBlock from "../components/SpeedBlock/speedBlock";
import {useRouter} from "next/router"

export default function Index() {
    const router = useRouter()
    const [wordCount, setWordCount] = useState(5)
    const [charCount, setCharCount] = useState(5)
    const [startDistance, setStartDistance] = useState(5)
    const [distanceStep, setDistanceStep] = useState(5)
    const [showTime, setShowTime] = useState(1)

    const BasicBtn = ({className, children, onClick}) => (
        <button className={className} onClick={onClick}>
            {children}
        </button>
    )

    function showTimeUp() {
        if (showTime !== 5) {
            return setShowTime(prev => prev + 0.5)
        }
    }

    function showTimeDown() {
        if (showTime !== 1) {
            return setShowTime(prev => prev - 0.5)
        }
    }

    const Title = styled.h1`
        font-style: normal;
        font-weight: bold;
        font-size: 64px;
        line-height: 75px;
        color: #2B3172;
        text-align: center;
        margin: 50px 0;
    `

    const RangeBlock = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 710px;
        height: 220px;
        background: #FFFFFF;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 48.2498px;
        padding: 24px 80px;
    `

    const RangeTitle = styled.p`
        font-style: normal;
        font-weight: bold;
        font-size: 48.2498px;
        line-height: 57px;
        text-align: center;
        color: #371548;
    `

    const StartBtn = styled(BasicBtn)`
        width: 390px;
        height: 110px;
        border-radius: 81px;
        background: #FDD207;
        font-style: normal;
        font-weight: bold;
        font-size: 48.9165px;
        line-height: 57px;
        color: #371548;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
        border: none;
        cursor: pointer;
    `

    const TrainingProps = styled.div`
        display: grid;
        grid-template-columns: repeat(2, 710px);
        grid-template-rows: repeat(3, 220px);
        grid-gap: 40px;
        justify-content: center;
    `

    function startHandler() {
        router.push({
            pathname: '/game',
            query: {
                wordCount,
                charCount,
                startDistance,
                distanceStep,
                showTime
            }
        }, '/game')
    }

    function setGameProps(name, value) {
        switch (name) {
            case 'WordCount':
                setWordCount(value)
                break
            case 'StartDistance':
                setStartDistance(value)
                break
            case 'CharCount':
                setCharCount(value)
                break
            case 'DistanceStep':
                setDistanceStep(value)
                break
        }
    }

    return (
        <MainLayout>
            <Title>Тренажер «Поле зрения»</Title>
            <TrainingProps>
                <RangeBlock>
                    <RangeTitle>
                        Сколько слов
                    </RangeTitle>
                    <RangeSteps min={1} max={10}/>
                    <InputRange name={'WordCount'} min={1} max={10} step={1} defValue={wordCount} onChange={setGameProps}/>
                </RangeBlock>
                <RangeBlock>
                    <RangeTitle>
                        Стартовое расстояние
                    </RangeTitle>
                    <RangeSteps min={5} max={40} step={5}/>
                    <InputRange name={'StartDistance'} min={5} max={40} step={5} defValue={startDistance} onChange={setGameProps}/>
                </RangeBlock>
                <RangeBlock>
                    <RangeTitle>
                        Сколько букв в словах
                    </RangeTitle>
                    <RangeSteps min={3} max={16}/>
                    <InputRange name={'CharCount'} min={3} max={16} step={1} defValue={charCount} onChange={setGameProps}/>
                </RangeBlock>
                <RangeBlock>
                    <RangeTitle>
                        Увеличение расстояния
                    </RangeTitle>
                    <RangeSteps min={5} max={40} step={5}/>
                    <InputRange name={'DistanceStep'} min={5} max={40} step={5} defValue={distanceStep} onChange={setGameProps}/>
                </RangeBlock>
                <RangeBlock>
                    <SpeedBlock speed={showTime} speedUp={showTimeUp} speedDown={showTimeDown}/>
                </RangeBlock>
                <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                    <StartBtn className={'startButton'} onClick={startHandler}>Старт</StartBtn>
                </div>
            </TrainingProps>
        </MainLayout>
    )
}
