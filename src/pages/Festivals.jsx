import { Box, styled } from "@mui/material";

import RightAligned from "../components/content/RightAligned";
import FestivalsInfo from "../components/content/FestivalsInfo";

import { festivalData } from "../constants/data";

const FestivalBox = styled(Box)({
  background: "url(5545982.jpg) center/170% repeat-y",
  marginTop: "55px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "40px",
  padding: "20px 0px"
});

const Festivals = () => {
  return (
    <FestivalBox>
      <FestivalsInfo />
      {festivalData.map((item) => (
        <RightAligned data={item} key={item.key} colour={"#174A7E"}/>
      ))}
    </FestivalBox>
  );
};

export default Festivals;
