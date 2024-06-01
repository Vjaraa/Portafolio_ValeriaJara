import React, { useState } from "react";
import * as S from "./Navbar.styles";


const Navbar = () => {
    const [showMenuBurger, setshowMenuBurger] = useState(false)
    
    console.log(showMenuBurger)
    
      return <S.ContainerNavbar>
        <S.ContainerLogo>
            <S.imageLogo src="/img/computadorlogo.png" alt="Valeria Jara" />
            <div>
                <h1>Valeria Jara</h1>
                <h2>Developer Full Stack</h2>
            </div>
        </S.ContainerLogo>
    
            <S.ContainerBurger onClick={() => setshowMenuBurger(!showMenuBurger)}>
                <S.BurgerMenu />
                <S.BurgerMenu />
                <S.BurgerMenu />
            </S.ContainerBurger>
    
        <S.ContainerItems showMenuBurger={showMenuBurger}>
            <p>Acerca de mi</p>
            <p>Proyectos</p>
            <S.button>Contacto</S.button>
        </S.ContainerItems>
    </S.ContainerNavbar>;
    };
    
    export default Navbar;