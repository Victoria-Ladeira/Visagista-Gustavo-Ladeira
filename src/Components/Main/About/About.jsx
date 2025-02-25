import cafe from "../../../assets/cafe.png"
import {Section, Img, Conteudo, H2} from "./Style"

export default function About() {
    return(
        <Section>
            <Img src={cafe} alt="" />
            <Conteudo>
            <H2>Mais Sobre Mim</H2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, voluptatum perspiciatis mollitia incidunt nihil fugit dignissimos laudantium eaque velit nobis corrupti facilis itaque animi sunt asperiores explicabo, provident ipsam tenetur nisi officia voluptate, optio quo molestiae! Doloribus alias officia magni et architecto blanditiis enim dolorum, ut odio eos sed quisquam praesentium inventore minus repellendus pariatur ducimus est distinctio veritatis ipsum voluptatum non modi sit? Hic enim maxime et magnam cumque dolor quidem fuga veniam corrupti eius. Natus modi dignissimos, repellat vitae laudantium tempore ipsa officia asperiores aperiam ipsum nulla perspiciatis sint doloremque quas ducimus eligendi nihil nisi architecto placeat ullam.</p>
            <div>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit perferendis a facere quia dolores quasi!</p>
            </div>
            <div>
                <h3>data</h3>
                <span>Lorem ipsum dolor sit amet.</span>
                <h3>data</h3>
                <span>Lorem ipsum dolor sit amet.</span>
                <h3>data</h3>
                <span>Lorem ipsum dolor sit amet.</span>
                <h3>data</h3>
                <span>Lorem ipsum dolor sit amet.</span>
            </div>
            <div>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat modi autem corrupti distinctio adipisci molestiae reprehenderit. Laudantium sed architecto vitae!</p>
            </div>
            </Conteudo>
        </Section>

    );
}