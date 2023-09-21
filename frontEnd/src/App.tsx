import { Container } from "@mui/material";
import "./App.css";
import Diary from "./pages/Diary/Diary.page";

function App() {
  return (
    <Container sx={{ backgroundColor: "#fffcf6" }}>
      <Diary></Diary>
    </Container>
  );
}

export default App;
