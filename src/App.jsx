import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./SharedLayout/SharedLayout";
import { Home } from "./pages/Home";
import { News } from "./pages/News";
import { OurActivity } from "./pages/OurActivity";
import { About } from "./pages/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="news" element={<News />} />
        <Route path="our-activity" element={<OurActivity />} />
        <Route path="about-us" element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;
