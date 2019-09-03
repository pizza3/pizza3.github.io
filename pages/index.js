import Page from '../layouts/main';
import SceneOne from '../components/scenes/sceneOne';
import Work from './work'
export default () => (
   <Page>
        <div className={'container'}>
            <div className={'navHeader'}>yugam dhuriya</div>
            <div className='navLink'>Work</div>
            <Work/>
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

                .navHeader{
                    position: relative;
                    text-align:center;
                    color: #292929;
                    font-family: 'BebasNeue';
                    font-size: 60px;
                    margin-top: calc(50vh - 46px);
                    cursor:pointer;
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

                .navLink{
                    position: relative;
                    text-align:center;
                    font-family: 'BebasNeue';
                    color: #949494;
                    font-size: 40px;
                    font-style: italic;
                    margin-top: 34vh;
                    cursor:pointer;
                }

                @media (max-width: 800px) {
                    .contRight{        
                        width: 100%;
                        top: 0px;
                        height: 50%;
                        padding-top: 14vh;
                        font-size: 20px;
                        padding-left: 12%;
                        padding-right: 12%;
                        text-align: center;
                        line-height: 30px;
                    }   
                    .contLeft{
                        width: 100%;
                        top: 0px;
                        height: 300px;
                        padding-top: 70px;  
                    }                 
                }
            `}
            </style>
        </div>
   </Page>
)
