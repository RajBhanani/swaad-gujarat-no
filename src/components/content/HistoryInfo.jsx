import { Box, Typography, styled } from "@mui/material";

const Container = styled(Box)({
  padding: "24px",
  borderRadius: "8px",
  boxShadow: "0px 0px 6px rgba(0, 0, 0, 0.6)",
  width: "75%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  background: "rgba(255,255,255, 0.2)",
  backdropFilter: "blur(10px)",
});

const Image = styled("img")({
  width: "40%",
  maxWidth: "600px",
  borderRadius: "8px",
});

const HeadingText = styled(Typography)({
  fontSize: "36px",
  fontWeight: "bold",
  color: "#FF9933",
  textShadow: "0px 0px 5px black",
  margin: "10px 0px",
});

const IntroText = styled(Typography)({
  fontSize: "18px",
  textAlign: "justify",
  marginTop: "16px",
  color: "white",
});

const HistoryInfo = () => {
  const imageUrl =
    "https://static.theprint.in/wp-content/uploads/2021/02/SARKHEJ_ROZA_AHMEDABAD_INDIA.jpg";
  const heading =
    "Exploring Gujarat's Glorious Past: A Tapestry of Legends and Kings";
  const text =
    "Gujarat, a state rich in history, has an illustrious past entwined with rulers and tales. It was the region of the ancient city of Dwarka, a representation of spiritual value, where Lord Krishna lived. Gujarat has seen the birth of great dynasties over the years, like the Solankis and the Chaulukyas, who left behind architectural wonders like the Rani Ki Vav stepwell and the Sun Temple of Modhera. The marine trade of the realm prospered, drawing the interest of dynasties like the Mauryas and the Mughals. Gujarat's fascinating history incorporates a confluence of civilizations and has made a lasting impression on India's historical fabric.";
  return (
    <Container>
      <Image src={imageUrl} alt="Gujarati Festival" />
      <HeadingText variant="h3">{heading}</HeadingText>
      <IntroText>{text}</IntroText>
    </Container>
  );
};

export default HistoryInfo;
