import "./sass/main.scss";

import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";

import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SingleGeneraMovies from "./pages/SingleGeneraMovies";
import Plans from "./pages/Plans";
import ProfileManager from "./pages/ProfileManager";
import ShowModalProvider from "./providers/ShowModalProvider";
import Player from "./pages/Player";

function App() {
  return (
    <div className="App">
      {/* show modal provider is used here so we can access its value in all pages */}
      <ShowModalProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route
              path="/genera/:generaname"
              element={<SingleGeneraMovies />}
            />
            <Route path="/plan" element={<Plans />} />
            <Route path="/profile" element={<ProfileManager />} />
            <Route path="/player" element={<Player url={""} />} />
          </Routes>
        </BrowserRouter>
      </ShowModalProvider>
    </div>
  );
}

export default App;
