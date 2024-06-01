import React from "react";
import * as S from "./AboutMe.styles";

const AboutMe = () => {
  return (
    <S.ContainerAboutMe>
      <S.ContainerFlex>
        <S.ContainerText>
          <S.Title>
            <p>Hello I am</p>
            <p>Valeria Jara Arenas</p>
            <p>Developer Full Stack</p>
          </S.Title>
          <S.DescriptionText>
          Hello, I am an Industrial Engineer by profession but I love technology, so at this moment my position is Quality Assurance, where my main objective is to ensure that the final product is of quality.
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
