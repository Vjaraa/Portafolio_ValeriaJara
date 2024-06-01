import styled from "styled-components";
import { colors } from "../../styles/colors";

export const ContainerProjects = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding-top: 50px;

  @media (max-width: 768px) {
    padding-top: 10px;
  }
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 30px;

  span {
    font-size: 40px;
    background: linear-gradient(135deg, #aa5f50 0%, #e68571 100%);
    -webkit-background-clip: text !important;
    -webkit-text-fill-color: transparent !important;
  }
`;

export const ContentProjects = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 468px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const ProjectContent = styled.div`
  padding: 0 10px;
`;

export const TitleProjects = styled.h3`
  padding: 8px 15px;
  font-weight: 700;
  font-size: 25px;
  text-align: center;
  margin-bottom: 10px;
  color: ${colors.TEXT_WHITE};
  box-shadow: ${colors.BOX_SHADOW_BUTTON};
  background: linear-gradient(135deg, #aa5f50 0%, #e68571 100%);
  text-decoration: none;
`;

export const ContainerImage = styled.div`
  text-align: center;

  img {
    width: 100%;
    box-shadow: ${colors.BOX_SHADOW_BUTTON};
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    img {
      max-width: 250px;
    }
  }
`;

export const ContainerTechs = styled.div`
  display: flex;
  align-items: center;
  padding-top: 18px;
  justify-content: space-evenly;

  div {
    text-align: center;
  }

  img {
    width: 35px;
    height: auto;
    margin: 0 5px;
  }

  p {
    margin-top: 2px;
    font-size: 13px;
    color: ${colors.TEXT_WHITE};
  }
`;

export const Description = styled.div`
  margin-top: 0;
`;

export const ContainerFooter = styled.div`
  display: flex;
  img {
    width: 35px;
  }

  a: firts-of-type {
    padding: 0 20px;
    }
`;
