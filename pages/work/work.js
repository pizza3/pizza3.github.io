import React, {Component} from 'react';
import Page from '../../layouts/main';

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
                            <img className={'imgg'} src='../../static/pro1.png'/>
                            <div className={'cont'}></div>
                        </div>
                        <div className={'pro'}>
                            <img className={'imgg'} src='../../static/pro1.png'/>
                            <div className={'cont'}></div>
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
                        transition:0.3s;
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