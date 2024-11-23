import { BrowserRouter, Route, Routes } from "react-router-dom";
import ViewPage from "./Pages/View";
import AddNew from "./Pages/Add";

function App() {
  return (
    <BrowserRouter>
      <Routes>
       
        <Route path="/view" element={<ViewPage />} />
        <Route path="/" element={<AddNew />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
