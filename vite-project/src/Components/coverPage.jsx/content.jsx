import {Box, Typography} from "@mui/material";

import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';




function content() {
return ( 
    <Box display={"flex"} flexDirection={"column"} gap={"20px"} marginTop={"50px"}>
        <Box>
            <Typography variant="h2" color="white">
                Hi, Im Yousef 
            </Typography>
            <Typography variant="body1" color="white" maxWidth={"500px"}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Dolore illum harum quaerat labore ipsa ducimus aspernatur
                expedita voluptate sint exercitationem earum quia beatae
                aliquam nam delectus nostrum, voluptatum vitae vel.
            </Typography>
        </Box>

        <Box>
            <Typography variant="body1" color="white" sx={{ alignItems:"center"}}>
            <PlaceOutlinedIcon/>Ramallah , Palestine
            </Typography>
        </Box>

        <Box display={"flex"} alignItems={"center"} gap={"10px"}>
            <Box sx={{width:"5px",height:"5px",borderRadius:"50%"}}bgcolor={"green"}>.</Box>
            <Typography variant="body1" color="white">
                Available for new Projects
            </Typography>
        </Box>

        <Box display={"flex"} gap={"30px"} alignItems={"center"}>
            <Typography variant="body1" color="white" sx={{ alignItems:"center"}}><GitHubIcon/></Typography>
            <Typography variant="body1" color="white" sx={{ alignItems:"center"}}><TwitterIcon/></Typography>
            <Typography variant="body1" color="white" sx={{ alignItems:"center"}}><LinkedInIcon/></Typography>
        </Box>
    </Box>
    );
}

export default content;