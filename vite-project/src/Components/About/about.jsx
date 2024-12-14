import { Box } from "@mui/material";
import AboutCOntent from "./content";
import AboutPhoto from "./photo";
function About() {
    return ( 
        <Box width={"100%"}
             height={"962px"}
             bgcolor={"#030712"}>
            <AboutPhoto/>
            <AboutCOntent/>
        </Box>
     );
}

export default About;