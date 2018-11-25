
const Footer =()=>{
    return(
        <div className={'footer'}>
            <div className={'cover'}></div>   
            <div className={'footerContainer'}>
                <a href="https://codepen.io/pizza3/" target="_blank">
                    <img className={'imgl'} src="/static/codepen.svg"  />
                </a>
                <a href="https://twitter.com/yugam_" target="_blank">
                    <img className={'imgr'} src="/static/twitter.svg"  />
                </a>
                <a href="https://github.com/pizza3" target="_blank">
                    <img className={'imgr'} src="/static/github.svg"  />
                </a>
            </div>
            <style jsx>
            {`
                .cover{
                    position:absolute;
                    }

                .footer {
                    position:fixed;
                    width:100%;
                    height:50px;
                    background:transparent;
                    overflow:hidden;
                    margin-top: calc(100vh - 50px);
                    z-index: 100;
                    }

                .footerContainer {
                    position:relative;
                    width:300px;
                    margin-left:calc(50% - 150px);
                    padding-top: 10px;
                }

                .imgl{
                    position:relative;
                    width: 28px;
                    float: left;
                    cursor:pointer;
                    }

                .imgr{
                    position:relative;
                    width: 28px;
                    float: right;
                    margin-left: 108px;
                    cursor:pointer;
                }

                @media (max-width: 800px) {
                    .cover{
                        width:100%;
                        height:100%;
                        background:rgba(255,255,255,0.7);
                        backdrop-filter:saturate(180%) blur(20px);
                        z-index:-1;
                    }
                }
                `}
                </style>
        </div>
    )
}

export default Footer;