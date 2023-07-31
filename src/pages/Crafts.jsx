import { Box, styled } from "@mui/material";

import RightAligned from "../components/content/RightAligned";
import CraftsInfo from "../components/content/CraftsInfo";

import { craftsData } from "../constants/data";

const CraftsBox = styled(Box)({
  background: "url(12864.jpg) center/170% repeat-y",
  marginTop: "55px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "40px",
  padding: "20px 0px",
});

const Crafts = () => {
  return (
    <CraftsBox>
      <CraftsInfo />
      {craftsData.map((item) => (
        <RightAligned data={item} key={item.key} colour={"#EBA832"}/>
      ))}
    </CraftsBox>
  );
};

export default Crafts;