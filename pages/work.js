import React, {Component} from 'react';
import Page from '../layouts/main';

class Work extends Component{

    constructor(props){
        super(props);
        this.state={

        }
    }

    componentDidMount(){

    }

    render(){
        return(
            <Page>
                <div className={'container'}>
                    <div className={'img'}>
                        <div className={'pro'}>
                            <img className={'imgg'} src='../../static/pro1.jpg'/>
                            <div className={'cont'}>
                                <div className={'contTitle'}>React gui controller</div>
                                <div className={'contDef'}>A graphical user interface for changing states in react. Inspired from Google's popular dat.GUI controller library. This library provides additional functionalities such as Ease curve editor, Draggable placement and Stylable component's. For styling this library uses Zeit styled-jsx.</div>
                            </div>
                        </div>
                        <div className={'pro'}>
                            <img className={'imgg'} src='../../static/pro2.jpg'/>
                            <div className={'cont'}>
                                <div className={'contTitle'}>React video pop</div>
                                <div className={'contDef'}>Floating video component made in react , which is draggable across any coordinate of the screen, consist of basic controls like mute, play etc and resizable too across any corner of the window. The working is inspired from the MacOS picture to picture feature.</div>
                            </div>
                        </div>
                    </div>
                    <style jsx>
                {`
                    .container{
                        position:absolute;
                        width:100%;
                        height:100vh;
                        padding-left: 20%;
                        padding-right: 20%;
                    }

                    .img{
                        position: relative;
                        width: 100%;
                        height: 900px;
                        margin-left: 0;
                        margin-top: calc(50vh - 200px);
                        background: transparent;
                    }

                    .pro{
                        position:relative;
                        width:100%;
                        height:400px;
                        background-size: cover;
                        margin-bottom: 173px;
                    }

                    .imgg{
                        width: 100%;
                        height: 91%;
                        object-fit: contain;
                        position: relative;
                        left: 0;
                        right: 0;
                        margin-left: auto;
                        margin-right: auto;
                        transition:0.3s;
                    }

                    .cont{
                        position: absolute;
                        width: 330px;
                        height: 372px;
                        background: #292929;
                        right: -52px;
                        top: 121px;
                        padding-right: 5%;
                        padding-left: 5%;
                        padding-top: 38px;
                        transition:0.3s;
                    }

                    .contTitle{
                        color: #c6c6c6;
                        text-align: center;
                        font-size: 19px;
                        margin-bottom: 22px;
                    }

                    .contDef{
                        color: #878787;
                        text-align: center;
                        word-spacing: 7px;
                    }

                    @media (max-width: 800px) {
                        .container{
                            padding-left: 0%;
                            padding-right: 0%;
                        }

                        .img{
                            margin-top: 112px;
                        }

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
                            background: #292929;
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
            </Page>
        )
    }
}



export default Work