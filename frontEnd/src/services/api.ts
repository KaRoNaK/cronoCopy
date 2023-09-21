import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000", // Replace with your API base URL
});

export interface FoodModel {
  id: string;
  name: string;
  calorie: number;
  protein: number;
  carb: number;
  fat: number;
}

export const getAllFoods = async (): Promise<FoodModel[]> => {
  try {
    const response = await api.get("/food");
    return response.data;
  } catch (err) {
    throw err;
  }
};

export default api;
