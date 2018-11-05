import Nav from '../components/nav'
import Footer from '../components/footer'
import Head from 'next/head';
import Global from '../components/global';
export default ({ children }) => (
  <div>
    <Head>
        <title>Yugam Dhuriya</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <style>
            {`
                ::selection {
                    color: #5f5f5f;
                    background: #080808;                 
                }

                ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
                    color: #D5D5D5;
                }

                ::-moz-placeholder { /* Firefox 19+ */
                    color: #D5D5D5;
                }
                :-ms-input-placeholder { /* IE 10+ */
                    color: #D5D5D5;
                }

                :-moz-placeholder { /* Firefox 18- */
                    color: #D5D5D5;
                }
            `}
        </style>
    </Head>
    <style dangerouslySetInnerHTML={{__html: `
         @font-face {
            font-family: 'BebasNeue';
            src: url('./static/BebasNeue-Regular.otf');
        }

        *{
            margin:0;
            padding:0;
            box-sizing:border-box;
            font-family: 'BebasNeue';
        }
    `}}/>
    {/* <Global/> */}
    <Nav />
    <Footer />
    { children }
  </div>
)