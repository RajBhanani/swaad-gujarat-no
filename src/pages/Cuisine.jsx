import { Box, styled } from "@mui/material";

import RightAligned from "../components/content/RightAligned";
import CuisineInfo from "../components/content/CuisineInfo";

import { cuisineData } from "../constants/data";

const CuisineBox = styled(Box)({
  background: "url(luxury_beauty_floral_background.jpg) center/190% repeat-y",
  marginTop: "55px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "40px",
  padding: "20px 0px",
});

const Cuisine = () => {
  return (
    <CuisineBox>
      <CuisineInfo />
      {cuisineData.map((item) => (
        <RightAligned data={item} key={item.key} colour={"#000040"}/>
      ))}
    </CuisineBox>
  );
};

export default Cuisine;
