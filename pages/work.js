import React, {Component} from 'react';
import Page from '../layouts/main';
import WorkCard from '../components/WorkCard';
class Work extends Component{

    constructor(props){
        super(props);
        this.state={

        }
    }
    
    render(){
        return(
            <Page>
                <div className='container'>
                    <div className='img'>
                        <WorkCard src={'../../static/vid3.mp4'} type='video' title={'Re Cardswipe'} desc={"re-cardswipe is a react component library emulating the UI card swipe as seen on applications such as tinder, this library provides the state track for each card, controls for physics of animation, dynamic trigger, and other feature's."} link={'https://github.com/pizza3/re-swipe'}/>                  
                        <WorkCard src={'../../static/vid1.mp4'} type='video' title={'React gui controller'} desc={"A graphical user interface for changing states in react. Inspired from Google's popular dat.GUI controller library. This library provides additional functionalities such as Ease curve editor, Draggable placement and Stylable component's. For styling this library uses Zeit styled-jsx."} link={'https://github.com/pizza3/react-gui-controller'}/>
                        <WorkCard src={'../../static/vid2.mp4'} type='video' title={'React video pop'} desc={"Floating video component made in react , which is draggable across any coordinate of the screen, consist of basic controls like mute, play etc and resizable too across any corner of the window. The working is inspired from the MacOS picture to picture feature."} link={'https://github.com/pizza3/react-video-pop'}/>                  
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
                            margin-top: calc(50vh - 350px);
                            background: transparent;
                        }

                        @media (max-width: 800px) {
                            .container{
                                padding-left: 0%;
                                padding-right: 0%;
                            }

                            .img{
                                margin-top: 6px;
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