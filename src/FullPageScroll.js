import React from 'react'
import Fullpage, {FullPageSections, FullpageSection, FullpageNavigation} from '@ap.cx/react-fullpage'
import MainPage from './components/pages/MainPage/MainPage'
import About from './components/pages/About'
import Advantages from './components/pages/Advantages'
import Capabilities from './components/pages/Capabilities'
import Role from './components/pages/Role'
import Cards from './components/pages/Cards'
import Statistic from './components/pages/Statistic'
import FAQ from './components/pages/FAQ'
import Footer from './components/Footer'

const FullPageScroll = () => {
  const SectionStyle={

  }
  const PaginationStyle ={
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '10px',
    gap: '5px',
    position: 'fixed',
    width: '55px',
    height: '375px',
    left: '50px',
    top: '312px',
  }
  return (
    <Fullpage>
      <div className='pagination'>
        <FullpageNavigation style={PaginationStyle} reverse={true}/>
      </div>
      
      <FullPageSections>
        <FullpageSection style={SectionStyle}>
          <MainPage/>
          
        </FullpageSection>
        <FullpageSection style={SectionStyle}>
          <About/>
        </FullpageSection>
        <FullpageSection style={SectionStyle}>
          <Advantages/>
        </FullpageSection>
        <FullpageSection style={SectionStyle}>
          <Capabilities/>
        </FullpageSection>
        <FullpageSection style={SectionStyle}>
          <Role/>
        </FullpageSection>
        <FullpageSection style={SectionStyle}>
          <Cards/>
        </FullpageSection>
        <FullpageSection style={SectionStyle}>
          <Statistic/>
        </FullpageSection>
        <FullpageSection style={SectionStyle}>
          <FAQ/>
        </FullpageSection>
      </FullPageSections>
    </Fullpage>
  )
}

export default FullPageScroll