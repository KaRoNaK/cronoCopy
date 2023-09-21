import FoodTable from "./FoodTable/FoodTable";
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from "@mui/material";
import { Kitchen, Close } from "@mui/icons-material";
import { useState } from "react";
import { FoodModel } from "../../services/api";
import FoodDetail from "./FoodDetail";

type Props = {};

const Food = (props: Props) => {
  const [open, setOpen] = useState(false);
  const [selectedFood, setSelectedFood] =
    useState<FoodModel | null>(null);

  return (
    <>
      <Button
        startIcon={<Kitchen color="info" />}
        color="primary"
        onClick={() => setOpen(true)}
      >
        <strong>FOOD</strong>
      </Button>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="xl"
        fullWidth
      >
        <DialogTitle>Add food to diary</DialogTitle>
        <IconButton
          aria-label="close"
          onClick={() => setOpen(false)}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <Close />
        </IconButton>
        <DialogContent
          sx={{
            padding: 0,
            margin: "0 24px 12px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box overflow={"auto"}>
            <FoodTable
              selectedFood={selectedFood}
              setSelectedFood={setSelectedFood}
            />
          </Box>
          {selectedFood && (
            <FoodDetail
              food={selectedFood}
              closeFoodDetail={() => setSelectedFood(null)}
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Food;
