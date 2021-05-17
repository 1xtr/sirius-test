import Head from "next/head"
import '../styles/main.sass'

export default function MyApp({Component, pageProps}) {
    return (
        <>
            <Head>
                <title>Тренажер "Поле зрения" | Sirius Future</title>
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"/>
            </Head>
            <Component {...pageProps} />
        </>
    )
}
