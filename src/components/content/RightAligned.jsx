import { Box, Typography, Grid, styled } from "@mui/material";

const RightAlignedBox = styled(Box)({
  width: "75%",
  height: "300px",
  display: "flex",
  borderRadius: "20px"
});

const TextGrid = styled(Grid)({
  padding: "30px",
  height: "300px",
  borderRadius: "20px"
});

const HeadingText = styled(Typography)({
  color: "white",
});

const Text = styled(Typography)({
    color: "white",
    fontSize: "18px",
    margin: "15px 0px"
})

const RightAligned = ({ data, colour }) => {
  return (
    <RightAlignedBox style={{background: colour}}>
      <Grid container>
        <Grid item lg={4} md={4} sm={12} xs={12}>
          <img
            src={data.url}
            alt={data.heading}
            style={{ height: "300px", width: "380px", transform: "scale(90%)", borderRadius: "10%" }}
          />
        </Grid>
        <TextGrid item lg={8} md={8} sm={12} xs={12} style={{background: colour}}>
          <HeadingText variant="h4">{data.heading}</HeadingText>
          <Text>{data.text}</Text>
        </TextGrid>
      </Grid>
    </RightAlignedBox>
  );
};

export default RightAligned;
