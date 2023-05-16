import { lazy, Suspense } from "react";
import NavBar from "./Components/Navigation";
import Footer from "./Components/footer";
import { Routes, Route } from "react-router-dom";
import Loading from "./Components/Loader";
// import NotFound from "./pages/NotFound";
// import About from "./pages/About";
// import Home from "./pages/Home";
// import Users from "./pages/Users";
const NotFound = lazy(() => import("./pages/NotFound"));
const About = lazy(() => import("./pages/About"));
const Home = lazy(() => import("./pages/Home"));
const Users = lazy(() => import("./pages/Users"));

const App = () => {
  return (
    <div className="flex h-screen w-full flex-col justify-between">
      <NavBar />
      <main className="container mx-auto px-10">
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/notfound" element={<NotFound />} />
            <Route path="/users/:login" element={<Users />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default App;
