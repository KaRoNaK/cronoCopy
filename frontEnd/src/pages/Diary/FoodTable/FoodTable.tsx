import { Science } from "@mui/icons-material";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";

import { FoodModel, getAllFoods } from "../../../services/api";
import classes from "./FoodTable.module.css";

type Props = {
  selectedFood: FoodModel | null;
  setSelectedFood: Dispatch<SetStateAction<FoodModel | null>>;
};

const FoodTable: React.FC<Props> = ({
  selectedFood,
  setSelectedFood,
}) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [foods, setFoods] = useState<FoodModel[] | null>(null);

  useEffect(() => {
    // if (!open) return;

    const fetchData = async () => {
      try {
        const data = await getAllFoods();
        setFoods(data);
        setLoading(false);
        setError("");
        console.log(data);
      } catch (error) {
        setError("Error fetching all food items.");
        setLoading(false);
      }
    };

    setLoading(true);

    fetchData();
  }, []);

  const handleRowClicked = (rowFood: FoodModel) => {
    if (selectedFood?.id === rowFood.id) {
      setSelectedFood(null);
      return;
    }

    setSelectedFood(rowFood);
  };

  return (
    // <TableContainer component={Paper}>
    <Table
      sx={{
        borderRadius: "10px",
        overflow: "hidden",
      }}
    >
      <TableHead sx={{ backgroundColor: "#e6e8f0" }}>
        <TableRow>
          <TableCell>
            <Typography>Description</Typography>
          </TableCell>
          <TableCell>
            <Typography>Source</Typography>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {foods?.map((food) => {
          return (
            <TableRow
              key={food.id}
              className={`${classes["table-row"]} ${
                selectedFood?.id === food.id
                  ? classes["table-row--active"]
                  : ""
              }`}
              onClick={() => handleRowClicked(food)}
            >
              <TableCell>{food.name}</TableCell>
              <TableCell>
                <Box display={"flex"} alignItems={"center"}>
                  <Science color="warning" /> NCCDB
                </Box>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
    // </TableContainer>
  );
};

export default FoodTable;
