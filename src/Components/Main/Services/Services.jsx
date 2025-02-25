import preto from "../../../assets/preto.png"
import {Section, Main, H3, P, H4, Section2, Section3, Div, Img, Descricao, Button} from "./Style"


export default function Services(){
    return(
        <Main>
        <Section>
            <H3>NOSSOS SERVIÇOS</H3>
            <P>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem neque, iste non aut autem eos veniam numquam officiis ea quo. Molestias vel maiores temporibus iure, impedit expedita rem distinctio fugit aspernatur! Fuga possimus id totam voluptas cumque. Laborum, excepturi dolores.</P>
        </Section>
        <Section2>
            <H4>O QUE SUA IMAGEM ESTÁ DIZENDO SOBRE VOCÊ HOJE?</H4>
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
            <Button>AGENDE AQUI</Button>
        </section>
    </Main>
    );
};