import styled from "styled-components"
import {Link} from "react-router-dom"

export const HeaderStyle = styled.header`
background-color: rgb(242,242,227, 0.62);
display: flex;
align-items: center;
justify-content: space-between;
position: fixed;
top: 0;
left: 0;
right: 0;
height: 13vh;
width: 99%;
padding: 0px 90px;
box-shadow: 4px 4px 5px 6px rgba(0, 0, 0, 0.2);
z-index: 2;
`
export const Img = styled.img`
width: 11vw;
rotate: calc(7deg);
`
export const StyleLink = styled(Link)`
text-decoration: none;
display: inline-block;
color: #363434;
font-size: 17px;
transition: transform 0.3s ease, color 0.3s ease;
font-family: 'Segoe UI', sans-serif;

&:hover{
    color: black;
    transform: translateY(-4px)
}
`
export const Ul = styled.ul`
list-style: none;
display: flex;
align-items: center;
justify-content: space-between;
width: 35vw;
`