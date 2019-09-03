
const WorkCard = (props) =>{
    return(
        <div className='pro'>
            {props.type==='video'?
            <video className='imgg' autoPlay={true} loop={true} src={props.src}/>
            :
            <img className='imgg' src={props.src}/>
            }
            <div className='cont'>
                <div className='contTitle'>{props.title}</div>
                <div className='contDef'>{props.desc}</div>
                <a href={props.link} target="_blank">
                    <button className='button'>view</button>
                </a>
            </div>
            <style jsx>
            {`
                .pro{
                    position:relative;
                    width:100%;
                    height:400px;
                    text-align:center;
                    background-size: cover;
                    margin-bottom: 173px;
                }

                .imgg{
                    width: auto;
                    height: 100%;
                    border-radius: 4px;
                    position: relative;
                    transition:0.3s;
                }

                .cont{
                    position: absolute;
                    width: 330px;
                    height: 372px;
                    background: #ffffff;
                    border: 1px solid #000;                
                    right: -52px;
                    top: 121px;
                    padding-right: 5%;
                    padding-left: 5%;
                    padding-top: 63px;
                    transition:0.3s;
                }

                .contTitle{
                    color: #000;
                    text-align: center;
                    font-size: 19px;
                    margin-bottom: 22px;
                }

                .contDef{
                    color: #787878;
                    text-align: justify;
                    font-family: monospace;                
                }

                .button{
                    position: relative;
                    width: 80%;
                    height: 36px;
                    color: #fff;
                    border: 1px solid #000;
                    background: #000;
                    font-size: 20px;
                    transition: 0.5s;
                    cursor: pointer;
                    background-blend-mode: screen;
                    margin-top: 25px;
                    margin-left: 10%;
                }

                @media (max-width: 800px) {

                    .pro{
                        margin-bottom: 202px;
                    }

                    .imgg{
                        width: 100%;
                        height: auto;
                        object-fit: contain;
                        position: relative;
                        left: 0;
                        right: 0;
                        margin-left: auto;
                        margin-right: auto;
                    }

                    .cont{
                        position: absolute;
                        width: 90%;
                        height: 34vh;
                        right: -52px;
                        top: 45vw;
                        left: 0;
                        right: 0;
                        margin-left: auto;
                        margin-right: auto;
                        padding-right: 10%;
                        padding-left: 10%;
                        padding-top: 38px;
                    }
                }
            `}
            </style>
        </div>
    )
}


export default WorkCard;