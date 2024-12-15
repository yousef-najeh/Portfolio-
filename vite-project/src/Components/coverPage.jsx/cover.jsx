import {Box} from "@mui/material";
import Content from "./content";
function Cover() {
    return ( 
        <Box width={"100%"}
             height={"552px"}
             bgcolor={"#030712"}
             sx={{
                display:"flex",
                justifyContent:"space-evenly"
            }}>
            
            <Content/>
            <Box width={"300px"}
                 height={"400px"}
                 bgcolor={"red"}
                 marginTop={"50px"}
                 component={"img"}
                 src="/yousef.jpg"/>
        </Box>
    );
}

export default Cover;