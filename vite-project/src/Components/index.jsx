import NavBar from "./navbar/NavBar";
import Cover from "./coverPage.jsx/cover";
import About from "./About/about";
import Skills from "./skills/skillls";
import Experience from "./Experince/experince";
function Index() {
    return (
        <>
            <NavBar />
            <Cover />
            <About />
            <Skills/>
            <Experience/>
        </>
    );
}

export default Index;
