import Page from '../layouts/main';
import SceneOne from '../components/scenes/sceneOne';



export default () => (
   <Page>
        <div className={'container'}>
            <div className={'headContainer'}>
                <div className={'contLeft'}>
                    <SceneOne/>
                </div>
                <div className={'contRight'}>
                    Frontend developer From New Delhi, India
                    Currently living in Chennai, making Stuff 
                    with react, node, threes, & Aframe.  
                    Interested in technologies such as AR/Vr,
                    Want to become a creative developer.
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
                    padding-top: 19vh;
                }

                .contRight{
                    position: relative;
                    float: left;
                    width: 50%;
                    top: 50px;
                    height: calc(100vh - 50px);
                    padding-top: 35vh;
                    color: #B7B7B7;
                    font-size: 20px;
                    padding-left: 6%;
                    padding-right: 33px;
                    line-height: 24px;
                }

                @media (max-width: 800px) {
                    .contRight{        
                        width: 100%;
                        top: 0px;
                        height: 50%;
                        padding-top: 0vh;
                        font-size: 21px;
                        padding-left: 12%;
                        padding-right: 12%;
                        text-align: center;
                        line-height: 30px;
                    }   
                    .contLeft{
                        width: 100%;
                        top: 0px;
                        height: 50vh;
                        padding-top: 0vh;  
                    }                 
                }
            `}
            </style>
        </div>
   </Page>
)
