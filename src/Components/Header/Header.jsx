import {Link} from "react-router-dom";
import logo from "../../assets/transparente.png";
import { HeaderStyle, Img, Ul, StyleLink } from "./Style";



export default function Header(){

    return(
        <HeaderStyle>
            <Img src={logo} alt="Logomarca" />
            <nav>
                <Ul>
                  <li><StyleLink to="/">Home</StyleLink></li>
                  <li><StyleLink to="/sobre">Sobre</StyleLink></li>
                  <li><StyleLink to="/servicos">Serviços</StyleLink></li>
                  <li><StyleLink to="/depoimentos">Depoimentos</StyleLink></li>
                  <li><StyleLink to="/contato">Contato</StyleLink></li>
                </Ul>
            </nav>
        </HeaderStyle>
    );

}