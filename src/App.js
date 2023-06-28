import { Error, HomePage } from "./views";
import { Header } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="*" element={<Error/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
