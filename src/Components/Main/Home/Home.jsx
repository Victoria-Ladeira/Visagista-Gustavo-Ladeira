import {Main, Section1, Img1, H1, H2, Section2, H3, P, Button, Div, Section3, Texto, Img2, Card, Div3, Img3, Ul, Li1, Li2, Section4} from "./Style"
import qualidade from "../../../assets/qualidade.png"
import experiencia from "../../../assets/experiencia.png"
import atendimento from "../../../assets/atendimento2.png"
import salao from "../../../assets/salao.jpg"
import perfil from "../../../assets/perfil.png"

export default function Home() {
   
   function handleClick() {
      window.location.assign("/contato");
    }

    function Click() {
      window.location.assign("/sobre");
    }

   return (
      <Main>
         <Section1>
         <Img1 src={salao} alt="" />
            <H2>Bem-Vindo a melhor fase da sua</H2>
            <H1> Imagem Pessoal</H1>
         </Section1>
         <Section2>
            <H3>Encontre a imagem que mais combina com você</H3>
            <P>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero nulla minima dolores, nemo quaerat consectetur aliquid aperiam deserunt necessitatibus molestiae, optio similique iste quo ducimus ipsam mollitia doloremque, facere perspiciatis velit corporis. Corporis pariatur sapiente explicabo cupiditate veniam illum incidunt.</P>
            <Button onClick={handleClick}>SAIBA MAIS</Button>
         </Section2>
         <Section3>
            <Div>
               <Texto>
               <H3>O Alfaiate</H3>
               <P>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, eaque consectetur deserunt tempore distinctio excepturi nam ea quasi quos praesentium voluptatum accusantium, necessitatibus, suscipit blanditiis aliquid culpa! Impedit facilis aperiam distinctio cupiditate, corrupti quod animi ipsum explicabo alias nobis! Est, odio? Ab nostrum animi maiores quaerat possimus ut ratione, tenetur voluptatem amet. Necessitatibus vel placeat asperiores consequatur nostrum beatae quaerat tenetur. Nobis nostrum harum dignissimos veritatis.</P>
               <Button onClick={Click}>SAIBA MAIS</Button>
               </Texto>
                <Img2 src={perfil} alt="" />
            </Div>
         </Section3>
         <Section2>
            <H3>Nossa Prioridade</H3>
            <Div3>
            <Card>
               <Img3 src={qualidade} alt="" />
               <figcaption>Qualidade Superior</figcaption>
            </Card>

            <Card>
               <Img3 src={atendimento} alt="" />
               <figcaption>Atendimento Personalizado</figcaption>
            </Card>

            <Card>
               <Img3 src={experiencia} alt="" />
               <figcaption>Foco na experiência do cliente</figcaption>
            </Card>
            </Div3>
         </Section2>
         <Section4>
            <H3>Porque passar por uma consultoria visagista?</H3>
            <Ul>
               <Li1>Lorem ipsum dolor sit amet consectetur adipisicing.</Li1>
               <Li2>Lorem ipsum dolor sit amet consectetur adipisicing.</Li2>
               <Li1>Lorem ipsum dolor, sit amet consectetur adipisicing.</Li1>
               <Li2>Lorem ipsum dolor sit amet consectetur adipisicing.</Li2>
            </Ul>
         </Section4>
      </Main>
   );
};