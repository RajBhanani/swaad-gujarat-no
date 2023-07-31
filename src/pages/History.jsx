import { Box, styled } from "@mui/material";

import RightAligned from "../components/content/RightAligned";
import HistoryInfo from "../components/content/HistoryInfo";

import { historyData } from "../constants/data";

const HistoryBox = styled(Box)({
  background: "url(38635.jpg) center/190% repeat-y",
  marginTop: "55px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "40px",
  padding: "20px 0px",
});

const History = () => {
  return (
    <HistoryBox>
      <HistoryInfo />
      {historyData.map((item) => (
        <RightAligned data={item} key={item.key} colour={"#F4c430"}/>
      ))}
    </HistoryBox>
  );
};

export default History;
