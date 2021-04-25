import Document, { Html, Head, Main, NextScript } from 'next/document';

// É criado para ser 'estático', não importa quantas rotas acesse, ele vai sempre continuar o mesmo
export default class MyDocument extends Document {

    render() {
        return (
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Inter&family=Lexend:wght@500;600&display=swap" rel="stylesheet" />


                    <link rel="shortcut icon" href="/favicon.png" type="image/op"></link>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }


}