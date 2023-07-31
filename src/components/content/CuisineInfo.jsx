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
  backdropFilter: "blur(10px)"
});

const Image = styled("img")({
    width: "40%",
    maxWidth: "600px",
    borderRadius: "8px",
});

const HeadingText = styled(Typography)({
    fontSize: "36px",
    fontWeight: "bold",
    color: "#e0aa3e",
    textShadow: "0px 0px 5px black",
    margin: "10px 0px",
});

const IntroText = styled(Typography)({
    fontSize: "18px",
    textAlign: "justify",
    marginTop: "16px",
    color: "white",
});

const CuisineInfo = () => {
  const imageUrl = "https://images.slurrp.com/prod/articles/mpc4f36pa6.webp";
  const heading = "Gujarat's Delightful Cuisine: A Gastronomic Adventure";
  const text =
    "Gujarati cuisine is a harmonious blend of flavors, offering a unique experience for food enthusiasts. From the sweet and tangy Dhokla, mouth-watering Khandvi, and crunchy Fafda to the delectable Undhiyu and the evergreen Thepla, each dish showcases the richness of Gujarat's culinary heritage. Savor the traditional Gujarati Thali, a feast comprising a variety of wholesome dishes. Don't miss the divine sweetness of Gujarati desserts like the Ghari and the delectable Mohanthal. Gujarat's culinary journey will leave you craving for more!";
  return (
    <Container>
      <Image src={imageUrl} alt="Gujarat Cuisine" />
      <HeadingText variant="h3">{heading}</HeadingText>
      <IntroText>{text}</IntroText>
    </Container>
  );
};

export default CuisineInfo;