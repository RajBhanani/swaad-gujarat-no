import { Box, Typography, styled } from "@mui/material";

const GridItemBox = styled(Box)({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "300px",
  background: "white",
  margin: "20px 0px",
  boxShadow: "0px 0px 15px black"
});

const GridText = styled(Typography)({
  fontSize: "40px",
  color: "white",
  textShadow: "0px 0px 10px white"
});

const GridCard = ({ url, text }) => {
  return (
    <GridItemBox style={{ background: `url(${url}) top/210% no-repeat` }}>
      <GridText>{text}</GridText>
    </GridItemBox>
  );
};

export default GridCard;
