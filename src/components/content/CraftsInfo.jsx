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
  color: "#edc967",
  textShadow: "0px 0px 5px black",
  margin: "10px 0px",
});

const IntroText = styled(Typography)({
  fontSize: "18px",
  textAlign: "justify",
  marginTop: "16px",
  color: "white",
});

const CraftsInfo = () => {
  const imageUrl =
    "https://t4.ftcdn.net/jpg/05/52/41/89/360_F_552418952_ZgstCN2vdIT5BwZlE8nNEwRm3XtGKhqT.jpg";

  const heading = "Artistic Marvels of Gujarat: The Enchanting Crafts";
  const text =
    "Gujarat's crafts are a testimony to the state's artistic brilliance and skilled craftsmanship. Embark on a journey through the intricate world of Kutchi embroidery, renowned for its vibrant colors and elaborate designs. Admire the breathtaking Bandhani textiles, a traditional tie and dye artistry. The mesmerizing Patola sarees, created using a complex double-ikat technique, are a treasure to behold. Experience the art of Wood Carving, showcased in intricate doors and panels. Witness the skilled artisans crafting stunning Pottery and the beautiful Bell Metal crafts. Gujarat's diverse crafts reflect the essence of its culture and heritage, captivating art lovers worldwide.";
  return (
    <Container>
      <Image src={imageUrl} alt="Gujarat Crafts" />
      <HeadingText variant="h3">{heading}</HeadingText>
      <IntroText>{text}</IntroText>
    </Container>
  );
};

export default CraftsInfo;
