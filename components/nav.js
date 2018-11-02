import React, {Component} from 'react';
import { css } from 'emotion'
import Link from 'next/link'
import Burger from './nav/burger';

class Nav extends Component{
    constructor(props){
        super(props);
        this.state={
            show:false
        }
        this.handleCLick = this.handleCLick.bind(this);
    }

    handleCLick(){
        const {show} = this.state;
        this.setState({
            show: !show
        })
    }

    render(){
        const {show} = this.state ;
        return(
        <div className={nav}>
            <Link href="/">
                <div className={navHeader}>yugam dhuriya</div>
            </Link>            
            <div className={`${navSLide} ${show?open:close}`}>
                <Link href="/contact">
                    <div className={navLink}>contact</div>
                </Link>
                <Link href="/work">
                <div className={navLink}>work</div>
                </Link>
            </div>
            <Burger handleCLick={this.handleCLick}/>
        </div>
        )
    }
}

const nav = css`
    position:fixed;
    width:100%;
    height: 70px;
    background:#fff;
    top: 40px;
    z-index:101;
    @media (max-width: 800px) {
        top: 0px;
  }
`

const navHeader = css`
    position: relative;
    float: left;
    font-family: 'BebasNeue';
    color: #292929;
    font-size: 47px;
    margin-top: 9px;
    margin-left: 70px;
    cursor:pointer;
    @media (max-width: 800px) {
        margin-left: 17px;
        margin-top: 17px;
  }
`

const navLink = css`
    position: relative;
    float: right;
    font-family: 'BebasNeue';
    color: #292929;
    font-size: 21px;
    margin-right: 70px;
    margin-top: 23px;
    cursor:pointer;
    @media (max-width: 800px) {
        margin-right: 17px;
        margin-top: 0px;
        width: 100%;
        margin-left: 9px;
        height: 44%;
        padding-top: 19px;        
        font-size: 35px;
        margin-right: -12px;
        color: #565656;
    }
`

const navSLide = css`

    @media (max-width: 800px) {
        position: fixed;
        width: 150px;
        height: 156px;
        background: #fff;
        transition: all 400ms cubic-bezier(0.175, 0.885, 0.32, 1.275); 
        border-radius: 12px;
        padding-top: 0px;
        right: 57px;
        top: 69px;
        box-shadow: 0px 0px 23px -17px rgba(0,0,0,0.75);
        border: 1px solid #ececec;  
        transform-origin:center;
        }
`

const open = css`
    @media (max-width: 800px) {
        transform:scale(1);
        opacity:1;
    }    
`
const close = css`
    @media (max-width: 800px) {
        transform:scale(0.5);
        opacity:0;
    }    
`
export default Nav;
