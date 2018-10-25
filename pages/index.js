export default () => <div>Welcome</div>
import { css } from 'emotion'
import Head from 'next/head'
const nav = css`
    width:100%;
    font-family: 'BebasNeue';
    text-align:center;
    font-size: 73px;
    letter-spacing: 1px;
    word-spacing: 10px;
    position: fixed;
    font-weight: bold;
    color: #292929;
    margin-top: 12px;
`

export default () => (
    <div>
        <Head>
            <title>Yugam Dhuriya</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <style>
                {`
                    *{
                        margin:0;
                        padding:0;
                    }

                    @font-face {
                        font-family: 'BebasNeue';
                        src: url('./static/BebasNeue-Regular.otf');
                    }

                    ::selection {
                        color: whitesmoke;
                        background: #ff0036;                    
                    }
                `}
            </style>
        </Head>
        <div>
           <div className={nav}>Yugam Dhuriya</div>
        </div>
    </div>
    )
