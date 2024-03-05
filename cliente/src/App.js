import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add from "./componentes/Add";
import Read from "./componentes/Read";
import Users from "./componentes/Users";
import Update from "./componentes/Update";
 
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/add" element={<Add />} />
          <Route path="/read/:id" element={<Read />} />
          <Route path="/" element={<Users />} />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
 
export default App;
