import "./App.css";

import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./SharedLayout/SharedLayout";
import { Home } from "./modules/Home/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />

      </Route>
    </Routes>
  );
}

export default App;
