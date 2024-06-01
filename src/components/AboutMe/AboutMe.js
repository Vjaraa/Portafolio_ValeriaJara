import React from "react";
import * as S from "./AboutMe.styles";

const AboutMe = () => {
  return (
    <S.ContainerAboutMe>
      <S.ContainerFlex>
        <S.ContainerText>
          <S.Title>
            <p>Hola, mi nombre es</p>
            <p>Valeria Jara Arenas</p>
            <p>Developer Full Stack</p>
          </S.Title>
          <S.DescriptionText>
          <p>Soy Ingeniera Industrial de profesión pero me encanta la tecnología, por lo que en este momento soy QA, donde mi principal objetivo es asegurar que el producto final sea de calidad.</p>
          <p>Quisiera seguir aprendiendo nuevas tecnologías para potenciar mi futuro profesional.</p>
          </S.DescriptionText>
          <S.ContainerIcons>
          </S.ContainerIcons>
        </S.ContainerText> 
        <S.ContainerImage>
            <img src="/img/FotoValeria.jpeg" alt="Valeria Jara" />
        </S.ContainerImage>
      </S.ContainerFlex>
    </S.ContainerAboutMe>
  );
};

export default AboutMe;
