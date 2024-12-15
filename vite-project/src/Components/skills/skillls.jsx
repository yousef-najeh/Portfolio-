import { Box,Typography } from "@mui/material";
import Skill from "./skill";

function Skills() {
    return ( 
        <Box width={"100%"} 
             bgcolor={"#030712"}
             display={"flex"}
             flexDirection={"column"}
             id={"Skills"}
             >
            <Typography p={"5px 30px"} 
                        borderRadius={"20px"} 
                        margin={"20px auto"} 
                        variant="body1" 
                        color="white" 
                        bgcolor={"#374151"}>
                            Skills
            </Typography>
            <Box  display={"flex"} justifyContent={"space-evenly"} flexWrap={"wrap"} marginLeft={"10%"} width={"80%"}>
                <Skill text={"react"} photo={"./icon-react.svg"} />
                <Skill text={"Node.js"} photo={"./icon-nodejs.svg"} />
                <Skill text={"Express"} photo={"./icon-express.svg"} />
                <Skill text={"mongodb"} photo={"./icon-mongodb.svg"} />
                <Skill text={"supabase"} photo={"./icon-supabase.png"} />
                <Skill text={"my-sql"} photo={"./mysql.png"} />
                <Skill text={"java"} photo={"./java.webp"} />
                <Skill text={"c++"} photo={"./cpp.png"} />
                <Skill text={"mui"} photo={"./mui.png"} />
                <Skill text={"chakraUI"} photo={"./chakraui.png"} />
                <Skill text={"Css"} photo={"./css.png"} />
                <Skill text={"Sass"} photo={"./icon-sass.svg"} />

                <Skill text={"Socket.io"} photo={"./icon-socket.svg"} />
                <Skill text={"Figma"} photo={"./icon-figma.svg"} />
                <Skill text={"Git"} photo={"./icon-git.svg"} />
                <Skill text={"Data Structure"} photo={"./datast.png"} />
                <Skill text={"OOP"} photo={"./oop.png"} />
                <Skill text={"Algorithm"} photo={"./algo.png"} />
                <Skill text={"GitHup"} photo={"./githup.png"} />
                <Skill text={"JavaScript"} photo={"./icon-javscript.svg"} />
            </Box>
        </Box>
    );
}

export default Skills;