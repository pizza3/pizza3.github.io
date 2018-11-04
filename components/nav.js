import React, {Component} from 'react';
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
        <div className={'nav'}>
            <div className='cover'></div>
            <Link href="/">
                <div className={'navHeader'}>yugam dhuriya</div>
            </Link>            
            <div className={`${'navSLide'} ${show?'open':'close'}`}>
                <Link href="/contact">
                    <div className={'navLink'}>contact</div>
                </Link>
                <Link href="/work">
                <div className={'navLink'}>work</div>
                </Link>
            </div>
            <Burger handleCLick={this.handleCLick}/>
            <style jsx>
                {`

                    .nav {
                        position:fixed;
                        width:100%;
                        height: 70px;
                        background:transparent;
                        top: 40px;
                        z-index:101;
                    }

                    .cover{
                        position:absolute;
                    }

                    .navHeader{
                        position: relative;
                        float: left;
                        color: #292929;
                        font-family: 'BebasNeue';
                        font-size: 47px;
                        margin-top: 9px;
                        margin-left: 70px;
                        cursor:pointer;
                    }

                    .navLink{
                        position: relative;
                        float: right;
                        font-family: 'BebasNeue';
                        color: #292929;
                        font-size: 21px;
                        margin-right: 70px;
                        margin-top: 23px;
                        cursor:pointer;
                    }

                    @media (max-width: 800px) {
                        .nav{
                            top: 0px;
                            background:transparent;
                            border-bottom: 1px solid #f2f2f2;
                        }

                        .cover{
                            width:100%;
                            height:100%;
                            background:#fff;
                            z-index:-1;
                            opacity: 0.9;
                        }

                        .navHeader{
                            font-size: 40px;
                            margin-left: 17px;
                            margin-top: 15px;
                        }

                        .navLink{
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

                        .navSLide{
                            position: fixed;
                            width: 150px;
                            height: 156px;
                            background: #fff;
                            transition: all 200ms cubic-bezier(0.175, 0.885, 0.32, 1.275); 
                            border-radius: 12px;
                            padding-top: 0px;
                            right: 57px;
                            top: 69px;
                            box-shadow: 0px 0px 23px -17px rgba(0,0,0,0.75);
                            border: 1px solid #ececec;  
                            transform-origin:center;
                        }
                        
                        .open{
                            transform:scale(1);
                            opacity:1;
                        }

                        .close{
                            transform:scale(0.5);
                            opacity:0;
                        }
                    }
                `}
            </style>
        </div>
        )
    }
}

export default Nav;
