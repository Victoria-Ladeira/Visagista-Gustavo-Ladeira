import styled from "styled-components";

export const Section = styled.section`
width: 100%;
height: 90%;
background-color: #ffffec;
display: flex;
align-items: center;
`

export const Img = styled.img`
width: auto;
height: 100vh;
transition: transform 1.1s ease, color 1.1s ease;

&:hover{
    transform: translateX(35px)
}
`

export const Conteudo = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100vh;
width: 40vw;
margin-left: 15rem;
`
export const H2 = styled.h2`
margin: 13px;
font-size: 50px;
font-weight: 100;
font-family: 'Segoe UI', sans-serif;
transition: transform 0.8s ease, color 0.8s ease;

&:hover{
    transform: translateX(9px);
}
`