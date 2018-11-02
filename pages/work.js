import React, {Component} from 'react';
import Page from '../layouts/main';
import {css} from 'emotion';
import { relative } from 'path';
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
                <div className={container}>
                    <div className={img}>
                    <div className={pro}>
                        <img className={imgg} src='./static/pro1.png'/>
                    </div>
                    </div>
                </div>
            </Page>
        )
    }
}

const container =  css`
    position:relative;
    width:100%;
    height:100vh;
`

const img = css`
    position:relative;
    width:50%;
    height: 400px;
    margin-left:25%;
    margin-top:calc(50vh - 200px);
    background:#000;

`

const pro = css`
    position:absolute;
    width:646px;
    height:400px;
    background-size: cover;
`
const imgg=css`
    position:absolute;
    width:100%;
    height:400px;
`


export default Work