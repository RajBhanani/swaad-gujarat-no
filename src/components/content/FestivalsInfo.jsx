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
  color: "#d2ac47",
  textShadow: "0px 0px 5px black",
  margin: "10px 0px",
});

const IntroText = styled(Typography)({
  fontSize: "18px",
  textAlign: "justify",
  marginTop: "16px",
  color: "white",
});

const FestivalsInfo = () => {
  const imageUrl =
    "https://www.adotrip.com/public/images/blogs/master_images/60fa945b3b361-10_Festivals_Of_Gujarat.jpg";
  const heading = "Welcome to Gujarat's Vibrant Festivals";
  const text =
    "Gujarat, known for its rich cultural heritage, celebrates a variety of royal festivals with great fervor. The state's vibrant Navratri festival draws people from all over to partake in energetic Garba dances, while Uttarayan (Kite Festival) fills the skies with colorful kites. Diwali illuminates the streets with dazzling lights, and Rann Utsav showcases the enchanting beauty of the white desert. These festivals unite people, reflecting Gujarat's warmth, hospitality, and deep-rooted traditions.";

  return (
    <Container>
      <Image src={imageUrl} alt="Gujarati Festival" />
      <HeadingText variant="h3">{heading}</HeadingText>
      <IntroText>{text}</IntroText>
    </Container>
  );
};

export default FestivalsInfo;
