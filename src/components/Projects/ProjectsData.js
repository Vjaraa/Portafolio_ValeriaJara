import bootstrapImage from "../../images/techs/Bootstrap.png";
import cssImage from "../../images/techs/CSS-Logo.png";
import htmlImage from "../../images/techs/HTML5.png";
import javaScriptImage from "../../images/techs/javascript.png";
import reactImage from "../../images/techs/logo_react.png";
import project1Image from "../../images/projects/project1.jpg";
import project2Image from "../../images/projects/project2.jpg";
import project3Image from "../../images/projects/project3.jpg";
import project4Image from "../../images/projects/project4.jpg";
import project5Image from "../../images/projects/project5.jpg";

export const projectsPortfolio = [
{
    title: "Landing_Page",
    image: project1Image,
    techs: [
        { name: "HTML", src: htmlImage }, 
        { name: "CSS", src: cssImage},
        { name: "Bootstrap", src: bootstrapImage },
    ],
    description: "Página web diseñada con HTML, CSS y bootstrap para la venta de productos de panadería y repostería",
    repository: "https://github.com/UDDBootcamp/Landing-page-Valeria.git",
    website: "https://uddbootcamp.github.io/Landing-page-Valeria/?classId=35a44987-4da9-446d-9030-89739e06ac5c&assignmentId=48c7e879-a290-412b-9307-a62ce7790eb2&submissionId=ff8edbc8-7d48-3023-ad2f-335bbd0bedc3",
},

{
    title: "Aplicación_CRUD",
    image: project2Image,
    techs: [
        { name: "HTML", src: htmlImage }, 
        { name: "CSS", src: cssImage },
        { name: "JavaScript", src: javaScriptImage },
    ],
    description: "Proyecto diseñado para guardar, a través de un formulario, listado de alumnos de una universidad",
    website: "https://vjaraa.github.io/Aplicacion-CRUD_C11/?classId=35a44987-4da9-446d-9030-89739e06ac5c&assignmentId=4217bb21-b95a-433a-b00c-516cf41b4975&submissionId=a2dcd71f-bd65-b05e-d4a2-b29e0df1d340",
},

{
    title: "Dashboard_vehículos",
    image: project3Image,
    techs: [
        { name: "HTML", src: htmlImage }, 
        { name: "CSS", src: cssImage },
        { name: "JavaScript", src: javaScriptImage },
        { name: "Bootstrap", src: bootstrapImage },
    ],
    description: "Dashboard que consume datos de una API externa para mostrar información relevante en gráficos y tablas.",
    repository: "https://github.com/Vjaraa/Dashboard_C11_2024.git",
    website: "https://vjaraa.github.io/Dashboard_C11_2024/",
},

{
    title: "Restaurant_App",
    image: project4Image,
    techs: [
        { name: "HTML", src: htmlImage }, 
        { name: "CSS", src: cssImage },
        { name: "React", src: reactImage },
    ],
    description: "Página web para un restaurant. Incluye información, formulario de contacto y sección de datos.",
    repository: "https://github.com/Vjaraa/Restaurant_App_C11.git",
    website: "https://dolcerosarestaurant.netlify.app/?classId=35a44987-4da9-446d-9030-89739e06ac5c&assignmentId=4bed7955-43bc-4eb1-9a5a-9efc7f817d60&submissionId=7aaf665a-6f30-bcab-ce9a-c14b3f0844ea",
},

{
    title: "E-commerce_App",
    image: project5Image,
    techs: [
        { name: "HTML", src: htmlImage }, 
        { name: "CSS", src: cssImage },
        { name: "React", src: reactImage },
    ],
    description: "Proyecto en construcción",
    repository: "https://github.com/Vjaraa/EcommerceApp_MERN.git",
    website: "",
},

]