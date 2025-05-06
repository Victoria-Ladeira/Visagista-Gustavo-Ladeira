import preto from "../../../assets/preto.png"
import { useState } from "react";
import {Section, Main, H3, P, H4, Section2, Section3, Div, Img, Descricao, Button} from "./Style"


export default function Services(){
            
        const [mostrarTexto, setMostrarTexto] = useState(false);

        const aoRolar = () => {
          const posicao = document.getElementById("texto").getBoundingClientRect().top;
          const alturaTela = window.innerHeight;
      
          if (posicao <= alturaTela * 0.8) {
            setMostrarTexto(true);
          }
        };
        
        window.addEventListener("scroll", aoRolar);

        function Service() {
            window.location.assign("/contato");
          }

        return(
        <Main>
        <Section>
            <H3>NOSSOS SERVIÇOS</H3>
            <P>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem neque, iste non aut autem eos veniam numquam officiis ea quo. Molestias vel maiores temporibus iure, impedit expedita rem distinctio fugit aspernatur! Fuga possimus id totam voluptas cumque. Laborum, excepturi dolores.</P>
        </Section>
        <Section2>
            <H4 id="texto" className={mostrarTexto ? "ativo" : ""}> O QUE SUA IMAGEM ESTÁ DIZENDO SOBRE VOCÊ HOJE? </H4>
        </Section2>
        <Section3>
            <Div>
            <Img src={preto} alt="" />
            <div>
            <h3>Consultoria Visagista</h3>
            <Descricao>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, commodi.</Descricao>
            </div>
            </Div>
            <Div>
            <Img src={preto} alt="" />
            <div>
            <h3>Consultoria Visagista</h3>
            <Descricao>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, commodi.</Descricao>
            </div>
            </Div>
            <Div>
            <Img src={preto} alt="" />
            <div>
            <h3>Consultoria Visagista</h3>
            <Descricao>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, commodi.</Descricao>
            </div>
            </Div>
            <Div>
            <Img src={preto} alt="" />
            <div>
            <h3>Consultoria Visagista</h3>
            <Descricao>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, commodi.</Descricao>
            </div>
            </Div>
            <Div>
            <Img src={preto} alt="" />
            <div>
            <h3>Consultoria Visagista</h3>
            <Descricao>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, commodi.</Descricao>
            </div>
            </Div>
            <Div>
            <Img src={preto} alt="" />
            <div>
            <h3>Consultoria Visagista</h3>
            <Descricao>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, commodi.</Descricao>
            </div>
            </Div>
        </Section3>
        <section>
            <Button onClick={Service}>AGENDE AQUI</Button>
        </section>
    </Main>
    );
};