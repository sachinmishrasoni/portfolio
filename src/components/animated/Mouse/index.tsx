import { Box, keyframes } from "@mui/material";

const scrollAnimation = keyframes`
  0% { opacity: 0; }
  10% { transform: translateY(-10px); opacity: 1; }
  100% { transform: translateY(10px); opacity: 0; }
`;

const Mouse = () => {
  return (
    <Box
      sx={{
        // position: "absolute",
        // top: 0,
        // right: 0,
        // bottom: 0,
        // left: 0,
        margin: "auto",
        width: 34,
        height: 55,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: 3,
          padding: "10px 15px",
          height: 35,
          border: "2px solid",
          borderColor: "text.secondary",
          borderRadius: "25px",
          opacity: 0.75,
          boxSizing: "content-box",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: 3,
            height: 10,
            borderRadius: "25%",
            backgroundColor: "text.secondary",
            animation: `${scrollAnimation} 2.2s cubic-bezier(.15, .41, .69, .94) infinite`,
          }}
        />
      </Box>
    </Box>
  );
};

export default Mouse;
