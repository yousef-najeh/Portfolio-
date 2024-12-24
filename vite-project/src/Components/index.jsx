import NavBar from "./navbar/NavBar";
import Cover from "./coverPage.jsx/cover";
import Skills from "./skills/skillls";
import { Box } from "@mui/material";
import ProjectSection from "./Projects/projectSection";
import Connect from "./Connect/connect";

function Index() {
    return (
        <Box height={"100vh"}>
            <NavBar />
            <Cover />
            {/* <About /> */}
            <Skills/>
            {/* <Experience/> */}
            <ProjectSection/>
            <Connect/>
        </Box>
    );
}

export default Index;
