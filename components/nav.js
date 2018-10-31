import { css } from 'emotion'
import Link from 'next/link'

const Nav = ()=>{
    return(
        <div className={nav}>
            <Link href="/" replace>
                <div className={navHeader}>yugam dhuriya</div>
            </Link>            
            <Link href="/contact" replace>
                <div className={navLink}>contact</div>
            </Link>
            <div className={navLink}>work</div>
        </div>
    )
}


const nav = css`
    position:fixed;
    width:100%;
    height: 70px;
    background:#fff;
    top: 40px;
    z-index:100;
`

const navHeader = css`
    position: relative;
    float: left;
    font-family: 'BebasNeue';
    color: #292929;
    font-size: 47px;
    margin-left: 70px;
    margin-top: 9px;
    cursor:pointer;
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
`
export default Nav;
