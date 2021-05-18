import styled from "@emotion/styled"

export default function MainLayout({children}) {
    const Logo = styled.div`
        position: fixed;
        width: 338px;
        height: 135px;
        top: 30px;
        right: 30px;
        background: url('./images/sirius_logo.png');
        background-size: cover;
    `

    const Main = styled.main`
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    `

    return (
        <>
            <Logo />
            <Main>
                {children}
            </Main>
        </>
    )
}
