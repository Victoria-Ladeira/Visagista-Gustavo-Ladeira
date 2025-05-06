import React from "react";
import { A, Section } from "./Style";
import { FaInstagram } from "react-icons/fa";
import { AiOutlineTikTok } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";

export default function Footer(){
    return(
    <Section>
        <div>
            <A href="https://www.instagram.com/gustavoladeira_?igshid=OGQ5ZDc2ODk2ZA%3D%3D" ><FaInstagram /></A>
            <A href="http://" ><AiOutlineTikTok /></A>
            <A href="https://www.youtube.com/@Gustavoladeira_" ><AiFillYoutube /></A>
        </div>
        <div>
            <p>Atendimentos às Segundas-feiras e de Quarta à Sábado das 09h às 20h</p>
            <A href="https://maps.app.goo.gl/BxcUW914Czo5KoJP8">R. Cel. Luíz da Silva Batista, 316 - Jardim Irajá, Ribeirão Preto - SP / 14020-570</A>
            <button ></button>
        </div>
    </Section>
    );
}