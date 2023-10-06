import "./App.css";
import Membersbar from "./components/Membersbar";
import Sidebar from "./components/sidebar";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Projects from "./pages/Projects/Projects";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp/SignUp";
import { ThemeProvider } from "./providers/ThemeProvider";
import { useAuthContext } from "./hooks/useAuthContext";
import Loading from "./components/Loading";

function App() {
    const { user, authIsReady } = useAuthContext();

    if(!authIsReady) return <Loading/>


  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div className="App flex ">
        <BrowserRouter>
          {user ? (
            <>
              <Sidebar />
              <div className="flex-grow">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="*" element={<Home />} />
                  <Route path="/projects" element={<Projects />} />
                </Routes>
              </div>
              <Membersbar />
            </>
          ) : (
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/*" element={<Login />} />
             
            </Routes>
          )}
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
