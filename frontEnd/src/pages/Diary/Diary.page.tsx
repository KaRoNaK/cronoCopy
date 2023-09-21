import { Box, Button } from "@mui/material";
import { DirectionsRun } from "@mui/icons-material";
import Food from "./Food";

type Props = {};

const Diary = (props: Props) => {
  return (
    <Box
      bgcolor={"white"}
      borderRadius={10}
      border={"1px solid #f0f2fa"}
      boxShadow={"#7779861a 0 3px 20px"}
      padding={"8px 16px"}
    >
      <Box display={"flex"} justifyContent={"space-between"}>
        <Box display={"flex"} gap={"4px"}>
          <Food />
          <Button
            startIcon={<DirectionsRun color="info" />}
            color="primary"
          >
            <strong>Exercise</strong>
          </Button>
        </Box>
        <Box></Box>
      </Box>
    </Box>
  );
};

export default Diary;
