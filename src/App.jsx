import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "./SharedLayout/SharedLayout";
import { Home } from "./pages/Home";
import { News } from "./pages/News";
import { OurActivity } from "./pages/OurActivity";
import { About } from "./pages/About";
import { PrivacyPolicy } from "./pages/Privacy-policy";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
		<Routes>
			<Route
				path='/'
				element={<SharedLayout />}>
				<Route
					index
					element={<Home />}
				/>
				<Route
					path='news'
					element={<News />}
				/>
				<Route
					path='our-activity'
					element={<OurActivity />}
				/>
				<Route
					path='about-us'
					element={<About />}
				/>
				<Route
					path='privacy-policy'
					element={<PrivacyPolicy />}
				/>
				<Route
					path='*'
					element={<NotFound />}
				/>
			</Route>
			
		</Routes>
	);
}

export default App;
