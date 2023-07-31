import { Box } from "@mui/material";
import Banner from "./Banner";
import styled from "@emotion/styled";
import Greeting from "./Greeting";

const HomeBox = styled(Box)({
  background: "url(12306.jpg) center/170% repeat-y",
  marginTop: "55px",
  padding: "50px 0px",
  height: "500vh",
  display: "flex",
  flexDirection: "column",
  gap: "20px",
  alignItems: "center",
});


const Home = () => {
  return (
    <HomeBox>
        <Box style={{ width: "75%", margin: "0px auto" }}>
          <Banner />
        </Box>
        <Greeting/>
        <Box>jahds</Box>
    </HomeBox>
  );
};

export default Home;
