import React from "react";
import { FoodModel } from "../../services/api";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import { Close } from "@mui/icons-material";

type Props = {
  food: FoodModel;
  closeFoodDetail: () => void;
};

const FoodDetail: React.FC<Props> = ({ food, closeFoodDetail }) => {
  return (
    <Stack marginTop={"16px"}>
      <Box position={"relative"} marginBottom={"16px"} alignItems={"center"} justifyContent={"center"}>
        <Typography marginTop={"8px"} variant="h5" textAlign={"center"}>
          {food.name}
        </Typography>
        <IconButton
          aria-label="close"
          onClick={closeFoodDetail}
          sx={{
            position: "absolute",
            right: 8,
            top: 0,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <Close />
        </IconButton>
      </Box>
      <Box>
        <Stack direction={"row"} gap={"16px"}>
          <Box flex={1} border={"1px solid #e6e8f0"} borderRadius={"10px"} padding={"16px 24px"}>
            asd
          </Box>
          <Box flex={1} border={"1px solid #e6e8f0"} borderRadius={"10px"} padding={"16px 24px"}>
            qwe
          </Box>
        </Stack>
      </Box>
    </Stack>
  );
};

export default FoodDetail;
