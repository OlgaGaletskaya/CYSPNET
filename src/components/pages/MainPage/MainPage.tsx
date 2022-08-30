import React from 'react'
import Footer from '../../Footer'

const MainPage = () => {
  return (
    <div className='mainpage'>
        <div className='container'>
            <div className='mainpage__inner'>
                <div className='mainpage__subtitle'>Cyber Sport Network</div>
                <div className='mainpage__title'>Играй, развивайся <br/>и выигрывай<br/> вместе с нами</div>
                <div className='mainpage__text'>
                    <div className='mainpage__txt'>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                                <rect y="0.5" width="10" height="10" rx="5" fill="#F04451"/>
                            </svg>
                            <p>Ежедневные турниры</p>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                                <rect y="0.5" width="10" height="10" rx="5" fill="#F04451"/>
                            </svg>
                            <p>Денежные призы</p>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                                <rect y="0.5" width="10" height="10" rx="5" fill="#F04451"/>
                            </svg>
                            <p>Свой подход к читерству</p>
                        </div>
                    </div>
                    <div className='mainpage__txt'>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                                <rect y="0.5" width="10" height="10" rx="5" fill="#F04451"/>
                            </svg>
                            <p>Уникальная рейтинговая система</p>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                                <rect y="0.5" width="10" height="10" rx="5" fill="#F04451"/>
                            </svg>
                            <p>Развитие в любой отрасли киберспорта</p>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                                <rect y="0.5" width="10" height="10" rx="5" fill="#F04451"/>
                            </svg>
                            <p>Интересный матчмейкинг</p>
                        </div>
                    </div>
                </div>
                <div className='mainpage__btns'>
                    <div className='accent-btn'>Присоединиться</div>
                    <div className='additional-btn'>О проекте</div>
                </div>
                
            </div>
            
            <Footer/>
        </div>
        <div className='mainpage__imgbox'>
                <img src='./img/mainpage/main.png' alt=''/>
            </div>
        
    </div>
  )
}

export default MainPage