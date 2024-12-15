import NavBar from "./navbar/NavBar";
import Cover from "./coverPage.jsx/cover";
import About from "./About/about";
import Skills from "./skills/skillls";
import Experience from "./Experince/experince";
import { Box } from "@mui/material";

function Index() {
    return (
        <Box height={"100vh"}>
            <NavBar />
            <Cover />
            <About />
            <Skills/>
            <Experience/>
        </Box>
    );
}

export default Index;
