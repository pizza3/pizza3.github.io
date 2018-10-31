import React, {Component} from 'react';
import Page from '../layouts/main'
import { css } from 'emotion';


class Contact extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }


    render(){
        return(
        <Page>
            <div className={container}>
                <div className={headContainer}>
                    <div className={contLeft}>
                    <form>
                        <input type='text' className={text} placeholder='NAME'/>
                        <input type='email' className={text} placeholder='EMAIL'/>
                        <textarea className={textArea} placeholder='MESSAGE'></textarea>
                        <button type='submit' className={button}>SUBMIT</button>
                    </form>
                    </div>
                    <div className={contRight}>
                        <div className={mailCont}>
                            <a href="mailto:yugam.dhuriya@gmail.com" >
                                <div className={atag}>
                                    <img src="/static/paperplane.svg" className={mailPlane} alt="my image" />
                                    <div>yugam.dhuriya@gmail.com</div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Page>
        )
    }
}

const container = css`
    position: relative;
    width: 100%;
    height: 100vh;
`

const headContainer = css`
    max-width: 1000px;
    display: block;
    width: 95%;
    margin: 0 auto;
`

const contLeft = css`
    position: relative;
    float: left;
    width: 50%;
    top: 50px;
    height: calc(100vh - 50px);
    padding-top:19vh;
`

const contRight = css`
    position: relative;
    float: left;
    width: 50%;
    top: 50px;
    height: calc(100vh - 50px);
    padding-top:19vh;
`

const text = css`
    width: 80%;
    height: 36px;
    font-size: 17px;
    padding-left: 8px;
    border: 1px solid #D1D1D1;
    margin-bottom: 17px;
`

const textArea = css`
    width: 80%;
    height: 170px;
    font-size: 17px;
    padding-left: 8px;
    border: 1px solid #D1D1D1;
    margin-bottom: 17px;
    padding-top: 7px;
`
const button = css`
    position:relative;
    width: 80%;
    height: 36px;
    border: 1px solid #000;
    background: transparent;
    font-size: 20px;
    transition:0.5s;
    cursor:pointer;
    :hover{
        color: #232931;
        fill: #ffffff;
        stroke: #ffffff;
    }

    ::before,
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

    ::before {
        left: 0;
    }

    ::after {
        right: 0;
        -webkit-transition: width 500ms cubic-bezier(0.645, 0.045, 0.355, 1);
        transition: width 500ms cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    :hover::before {
        width: 100%;
        -webkit-transition: width 500ms cubic-bezier(0.645, 0.045, 0.355, 1);
        transition: width 500ms cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    :hover::after {
        width: 100%;
        background: transparent;
        -webkit-transition: 0;
        transition: 0;
    }

` 

const mailCont = css`
    position: relative;
    float: left;
    width: 100%;
    height: 331px;
    border-left: 1px solid #d1d1d1;

}
`

const mailPlane = css`
    width: 17px;
    position: relative;
    float: left;
`

const atag = css`
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
`

export default Contact;