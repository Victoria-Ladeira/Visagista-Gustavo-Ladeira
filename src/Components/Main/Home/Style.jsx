import styled from "styled-components";

export const Main = styled.main`
background-color: #f7f7eb;
height: 560vh;
width: 100%;
overflow: hidden;
`

export const Section1 = styled.section`
height: 86vh;
width: 99%;
margin-top: 0px;
position: relative;
`

export const Img1 = styled.img`
width: 99%;
height: 100vh;
margin: 0px;
object-fit: cover;
`

export const H2 = styled.h2`
position: relative;
bottom: 340px;
left: 200px;
z-index: 1;
font-size: 30px;
background-color: #e3e3c7;
color: #262624;
width: 28vw;
font-family: 'Segoe UI', sans-serif;
font-weight: 100;
text-align: center;
`

export const H1 = styled.h1`
position: relative;
bottom: 330px;
left: 177px;
z-index: 1;
font-size: 70px;
color: #e3e3c7;
text-shadow: 0.1em 0.2em 0.2em #1a1a18;
font-family: "Dancing Script", serif;
font-weight: 1000;
`

export const Section2 = styled.section`
margin-top: 250px;
height: 72vh;
width: 60vw;
display: flex;
flex-direction: column;
justify-content: space-around;
margin-left: 330px;
`

export const H3 = styled.h3`
font-size: 60px;
font-weight: 100;
font-family: 'Segoe UI', sans-serif;
width: 60vw;
transition: transform 0.8s ease, color 0.8s ease;

&:hover{
    transform: translateX(9px);
}
`

export const P = styled.p`
width: 40vw;
font-size: 18px;
`

export const Button = styled.button`
width: 15vw;
height: 7vh;
color: #e3e3c7;
background-color: #262624;
font-size: 19px;
font-family: 'Segoe UI', sans-serif;
font-weight: 100;
transition: transform 0.8s ease, color 0.8s ease;

&:hover{
    transform: translate(-5px, -5PX);
    cursor: pointer;
}
`

export const Section3 = styled.section`
height: 70vh;
width: 67vw;
margin: 250px 0px 0px 190px;
background-color: #262624;
display: flex;
`

export const Div = styled.div`
height: 55vh;
width: 50vw;
background-color: #fbfbdf;
display: flex;
margin-top: 25px;
`

export const Texto = styled.div`
width: 35vw;
height: 53vh;
margin-left: 50px;
display: flex;
flex-direction: column;
justify-content: space-around;

`

export const Img2 = styled.img`
height: 50vh;
margin: 89px 0px 0px 270px;
transition: transform 0.9s ease, color 0.9s ease;

&:hover{
    transform: translate(-15px, -15px);
}
`

export const Card = styled.figure`
height: 30vh;
text-align: center;
transition: transform 0.7s ease;

&:hover{
  transform: scale(1.05);
}
`

export const Div3 = styled.div`
height: 50vh;
width: 60vw;
margin-left: -50px;
display: flex;
align-items: center;
justify-content: space-around;
transition: transform 0.9s ease, box-shadow 0.6s ease;


  &:hover {
    transform: scale(1.02);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
  }
`

export const Img3 = styled.img`
width: 13vw;
height: 24vh;
`

export const Ul = styled.ul`
height: 70vh;
margin-left: -40px;
display: flex;
flex-direction: column;
justify-content: space-around;
`

export const Li1 = styled.li`
width: 40vw;
font-size: 19px;
list-style: none;
`

export const Li2 = styled.li`
width: 40vw;
font-size: 19px;
list-style: none;
margin-left: 600px;
`
export const Section4 = styled.section`
 height: 130vh;
 width: 60vw;
margin-left: 300px;
margin-top: 120px;
display: flex;
flex-direction: column;
justify-content: space-around;
`