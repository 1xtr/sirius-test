import styled from "@emotion/styled";

export default function SpeedBlock({speed, speedUp, speedDown}) {

    const Span = styled.span`
        font-style: normal;
        font-weight: bold;
        font-size: 47.9924px;
        line-height: 56px;
        color: #371548;
        text-align: center;
    `

    const Button = styled.button`
        width: 92px;
        height: 92px;
        background: #FDD207;
        border-radius: 15px;
        border: none;
        cursor: pointer;
        ont-style: normal;
        font-weight: bold;
        font-size: 80px;
        color: #371548;
    `
    return (
        <>
            <Span>Скорость {speed} сек.</Span>
            <div style={{
                display: "flex",
                justifyContent: "center"
            }}>
                <Button onClick={speedUp} style={{marginRight: 22}}>+</Button>
                <Button onClick={speedDown}>-</Button>
            </div>
        </>
    )
}
