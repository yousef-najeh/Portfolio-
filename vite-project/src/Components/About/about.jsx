import { Box,Typography } from "@mui/material";
import AboutCOntent from "./content";
import AboutPhoto from "./photo";
function About() {
    return ( 
        <Box width={"100%"}
             height={"962px"}
             bgcolor={"#111827"}
             id={"about"}
             display={"flex"}
             flexDirection={"column"}
             >
            <Typography variant="body1" 
                        color="white"
                        margin={"20px auto"}
                        p={"5px 30px"}
                        bgcolor={"#374151"}
                        borderRadius={"20px"}>
                            About
            </Typography>
            <Box  display={"flex"}
                  justifyContent={"space-evenly"}>
                <AboutPhoto/>
                <AboutCOntent/>
            </Box>
          
        </Box>
     );
}

export default About;