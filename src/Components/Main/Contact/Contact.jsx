import { Section, Div } from "./Style";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact(){
   return(
    <Section>
        <Div>
            <h2>Agende pelo Whatsapp</h2>
            <FaWhatsapp />
            <a href="">(16) 9999-9999</a>
        </Div>
        <div>
            <h2>Agende pelo APP</h2>
            <a href="http://">LINK</a>
        </div>
        <div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.674390027692!2d-47.805110524914085!3d-21.20509008048875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b9bf2a8dd06bc7%3A0xd7df8e239a376c47!2sBrutus%20Barbearia!5e0!3m2!1spt-BR!2sbr!4v1746491323999!5m2!1spt-BR!2sbr" frameborder="0"></iframe>
            
        </div>
        
    </Section>
   );
};