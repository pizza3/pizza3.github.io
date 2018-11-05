import React, {Component} from 'react';
import Page from '../../layouts/main'
import Link from 'next/link'

class Contact extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }


    render(){
        return(
        <Page>
            <div className={'container'}>
                <div className={'headContainer'}>
                    <div className={'contLeft'}>
                    <form className={'form'}>
                        <input type='text' className={'text'} placeholder='NAME'/>
                        <input type='email' className={'text'} placeholder='EMAIL'/>
                        <textarea className={'textArea'} placeholder='MESSAGE'></textarea>
                        <button type='submit' className={'button'}>SUBMIT</button>
                    </form>
                    </div>
                    <div className={'contRight'}>
                        <div className={'mailCont'}>
                            <Link href="mailto:yugam.dhuriya@gmail.com">
                                <div className={'atag'}>
                                    <img src="../../static/paperplane.svg" className={'mailPlane'} />
                                    <div>yugam.dhuriya@gmail.com</div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <style jsx>
                {`
                    .container{
                        position: relative;
                        width: 100%;
                        height: 100vh;
                    }

                    .headContainer{
                        max-width: 1000px;
                        display: block;
                        width: 95%;
                        margin: 0 auto;
                    }

                    .contLeft{
                        position: relative;
                        float: left;
                        width: 50%;
                        top: 50px;
                        height: calc(100vh - 50px);
                        padding-top:19vh;
                        z-index:10;
                    }

                    .contRight{
                        position: relative;
                        float: right;
                        width: 50%;
                        top: 50px;
                        height: calc(100vh - 50px);
                        padding-top:19vh;
                        z-index:-1;
                    }

                    .text{
                        width: 80%;
                        height: 36px;
                        font-size: 17px;
                        padding-left: 8px;
                        border: 1px solid #D1D1D1;
                        margin-bottom: 17px;
                    }

                    .textArea{
                        width: 80%;
                        height: 170px;
                        font-size: 17px;
                        padding-left: 8px;
                        border: 1px solid #D1D1D1;
                        margin-bottom: 17px;
                        padding-top: 7px;
                    }

                    .button{
                        position:relative;
                        width: 80%;
                        height: 36px;
                        border: 1px solid #000;
                        background: transparent;
                        font-size: 20px;
                        transition:0.5s;
                        cursor:pointer;
                    }

                    .button:hover{
                        color: #232931;
                        fill: #ffffff;
                        stroke: #ffffff;
                    }
                
                    .button::before,
                    ::after {
                        content: "";
                        background: #e4d183;
                        position: absolute;
                        top: 0%;
                        height: 100%;
                        width: 0;
                        color: #ffffff;
                        background-blend-mode: screen;
                        z-index: -1;
                    }
                
                    .button::before {
                        left: 0;
                    }
                
                    .button::after {
                        right: 0;
                        -webkit-transition: width 500ms cubic-bezier(0.645, 0.045, 0.355, 1);
                        transition: width 500ms cubic-bezier(0.645, 0.045, 0.355, 1);
                    }
                
                    .button:hover::before {
                        width: 100%;
                        -webkit-transition: width 500ms cubic-bezier(0.645, 0.045, 0.355, 1);
                        transition: width 500ms cubic-bezier(0.645, 0.045, 0.355, 1);
                    }
                
                    .button:hover::after {
                        width: 100%;
                        background: transparent;
                        -webkit-transition: 0;
                        transition: 0;
                    }
                    .mailCont{
                        position: relative;
                        float: left;
                        width: 100%;
                        height: 331px;
                        border-left: 1px solid #d1d1d1;
                    }

                    .mailPlane{
                        width: 17px;
                        position: relative;
                        float: left;
                    }

                    .atag{
                        float: right;
                        border: 1px solid #ECECEC;
                        -webkit-text-decoration: none;
                        text-decoration: none;
                        color: #D5D5D5;
                        padding-left: 30PX;
                        padding-right: 30px;
                        padding-top: 8px;
                        margin-top: 19vh;
                        width: 294px;
                        height: 36px;
                        text-align: center;
                    }


                    @media (max-width: 800px) {
                        .contLeft{
                            width: 100%;
                            top: 0px;
                            height: 70vh;
                            padding-top: 122px;    
                        }

                        .contRight{
                            width: 100%;
                            top: 0px;
                            height: 30vh;
                            padding-top: 0vh;
                            overflow: hidden; 
                            padding-left: 3%;
                            padding-right: 3%;
                        }
                        
                        .text{
                            width: 100%;
                            height: 46px;
                        }


                        .textArea{
                            width: 100%;                    
                        }

                        .button{
                            width: 100%;
                            height: 46px;
                        }

                        .mailCont{
                            border-left:none;
                            border-top: 1px solid #d1d1d1;
                        }

                        .atag{
                            float: left;
                            padding-top: 14px;
                            margin-top: 7vh;
                            width: 100%;
                            height: 46px;
                        }

                        .form{
                            padding-left: 3%;
                            padding-right: 3%;
                        }
                    }
                `}
                </style>
            </div>
        </Page>
        )
    }
}


export default Contact;