import styled from "styled-components";

export const Main = styled.main`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding-top: 190px;
background-color: #f7f7eb;
width: 100%;
`
export const Section = styled.section`
height: 60vh;
width: 50vw;
`
export const H3 = styled.h3`
font-size: 55px;
font-weight: 100;
font-family: 'Segoe UI', sans-serif;
width: 60vw;
transition: transform 0.8s ease, color 0.8s ease;
padding: 45px;

&:hover{
    transform: translateX(9px);
}
`
export const P = styled.p`
width: 40vw;
font-size: 18px;
margin-left: 35px;
`

export const H4 = styled.p`
font-size: 55px;
font-weight: 100;
font-family: 'Segoe UI', sans-serif;
margin-left: 35px;
color: #e3e3c7;
width: 50vw;
text-align: center;
transition: transform 0.99s ease, color 0.99s ease;

&:hover{
    transform: scale(1.15);
}
`

export const Section2 = styled.section`
background-color: #262624;
width: 100%;
height: 60vh;
display: flex;
align-items: center;
justify-content: center;
`

export const Section3 = styled.section`
width: 70vw;
height: 120vh;
margin-top: 160px;
display: flex;
justify-content: space-between;
align-items: center;
position: relative;
flex-wrap: wrap;
`

export const Div = styled.div`
height: 20vh;
display: flex;
align-items: center;
justify-content: space-around;
width: calc(50% - 140px);
transition: transform 0.9s ease, box-shadow 0.6s ease;


  &:hover {
    transform: scale(1.15);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
  }
`

export const Img = styled.img`
width: 150px;
height: 150px;
`

export const Descricao = styled.p`
width: 182px;
font-size: 15px;
margin-top: 9px;
`

export const Button = styled.button`
width: 15vw;
height: 7vh;
margin: 70px;
color: #e3e3c7;
background-color: #262624;
font-size: 19px;
font-family: 'Segoe UI', sans-serif;
font-weight: 100;
transition: transform 0.9s ease, box-shadow 0.6s ease;


  &:hover {
    transform: scale(1.2);
  }
`