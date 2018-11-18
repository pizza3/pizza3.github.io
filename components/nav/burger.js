import { css, keyframes } from 'emotion';
import React , {Component} from 'react';

const Burger =(props)=>{
    return(
    <button className={men} onClick={props.handleCLick}>
        <div className={menl}></div>
        <div className={menr}></div>
    </button>
    )
}

const startl = keyframes`
    0%{
        margin-top: 0px;
    }
    60%{
        margin-top: 4px;
        transform:rotate(0deg)
    }
    100%{
        margin-top: 4px;
        transform:rotate(45deg)
    }
`


const startr = keyframes`
    0%{
        margin-top: 8px;
    }
    60%{
        margin-top: 4px;
        transform:rotate(0deg)
    }
    100%{
        margin-top: 4px;
        transform:rotate(-45deg)
    }
`


const men = css`
    visibility:hidden;
    @media (max-width: 800px) {
        position: absolute;
        visibility:visible;  
        top: 17px;
        right: 5%;
        width: 40px;
        height: 40px;
        border: none;
        background: transparent;
    }
`

const menl = css`
    position:absolute;
    width:40px;
    height:2px;
    background:#707070;
    transform-origin: center;
    margin-top: -8px;
`

const menr = css`
    position:absolute;
    width: 40px;
    height: 2px;
    background:#707070;
    margin-top:4px;
    transform-origin: center;
    margin-top: 4px;
`

const animl = css`
  animation: ${startl} 1s ease infinite;
`

const trans =  css`
    transform: translate(43%,0%);
`


export default Burger;