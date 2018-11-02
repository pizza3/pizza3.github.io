import { css } from 'emotion'

const Footer =()=>{
    return(
        <div className={footer}>
            <div className={footerContainer}>
                <a href="https://codepen.io/pizza3/" target="_blank">
                    <img className={imgl} src="/static/codepen.svg" alt="my image" />
                </a>
                <a href="https://twitter.com/tpizza3" target="_blank">
                    <img className={imgr} src="/static/twitter.svg" alt="my image" />
                </a>
                <a href="https://github.com/pizza3" target="_blank">
                    <img className={imgr} src="/static/github.svg" alt="my image" />
                </a>
            </div>
        </div>
    )
}

const footer = css`
    position:fixed;
    width:100%;
    height:50px;
    background:#fff;
    overflow:hidden;
    margin-top: calc(100vh - 50px);
    z-index: 100;
`

const footerContainer = css`
    position:relative;
    width:300px;
    margin-left:calc(50% - 150px);
`

const imgl =css`
    position:relative;
    width: 28px;
    float: left;
    cursor:pointer;
`

const imgr =css`
    position:relative;
    width: 28px;
    float: right;
    margin-left: 108px;
    cursor:pointer;

`

export default Footer;