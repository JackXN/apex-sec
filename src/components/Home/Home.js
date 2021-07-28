import React from 'react'
import {BrowserRouter as Router, Link,Switch} from 'react-router-dom';
import Bg from '../../assets/Images/home-bg.jpeg'
import styled from 'styled-components';


const LandingPage = styled.section `
background-image: url(${Bg});
background-size: cover;
background-position: center;
background-repeat: no-repeat;
background-attachment: fixed;
height: 100vh;
margin: 0;
padding: 0;
font-family: 'Barlow Condensed', sans-serif;
justify-content:center;
align-items:center;
text-align:center;
`

const DarkLayer = styled.div `
height: 100%;
background: rgba(0, 0, 0, 0.8);
width: 100%;
`



const LandingContent = styled.div`

`

const HeaderText = styled.h1`
font-size: 20px;
color:white;
padding: 10px;
font-weight: 400;
`

const Title = styled.h1 `
color: white;
font-size: 30px;
font-weight: bolder;
padding: 40px;
padding-bottom: 0;
font-weight: 700;
`

const IntroText = styled.p`
color:white;
padding: 20px;
`


const StyledButtonContainer = styled.div`
display:flex;
flex-direction: row;
justify-content: space-evenly;
align-items: center;

`


const StyledButton = styled.button `
padding: 10px;
border: none;
color: white;
background: ${props => props.primary ? '#AD0441' : '#191A1B'}


`








function Home() {
    return (
 <LandingPage>
 <DarkLayer>
     <LandingContent>
<HeaderText>Apex Security is a locally owned Cybersecurity Company</HeaderText>
<Title>
    Can Your Website Or Network Be Hacked?
</Title>

<IntroText>
From large Fortune 500 companies to local small businesses, we are here to help secure your most valuable data.  Our solutions meet your needs and requirements. When your ready to secure your organization, choose us as your partner
</IntroText>

<StyledButtonContainer>
<StyledButton primary>
    Contact Us
</StyledButton>
<StyledButton>
    About Us
</StyledButton>
</StyledButtonContainer>

</LandingContent>
</DarkLayer>
 </LandingPage>
 

        
    )
}

export default Home
