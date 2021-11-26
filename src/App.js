import "./App.css";
import Layout from "./components/Layout";
import Result from "./components/pages/Result";
import Login from "./components/pages/Login";
import Quiz from "./components/pages/Quiz";
import Home from "./components/pages/Home";
import Signup from "./components/pages/Signup";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "../src/contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="quiz" element={<Quiz />} />
          <Route path="result" element={<Result />} />
        </Routes>
      </Layout>
    </AuthProvider>
  );
}

export default App;
