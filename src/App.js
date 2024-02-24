import "./App.css";
// import Post from "./Post";
// import Header from "./Header";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout";
import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import CreatePost from "./pages/CreatePost";
import { UserContextProvider } from "./userContext";
import PostPage from "./pages/PostPage";
import EditPost from "./pages/EditPost";
import {Card} from "../src/components/Card"
import { SignInThree } from "./components/SignIn";
import { SignUpThree } from "./components/SignUp";
import Footer from "./components/Footer";
import { ContactPageTwo } from "./components/Contact";

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path={"/login"} element={<LoginPage />} />
          <Route path={"/register"} element={<RegisterPage />} />
          <Route path={"/create"} element={<CreatePost/>}/>
          <Route path="/post/:id" element={<PostPage/>}/>
          <Route path ="/edit/:id" element={<EditPost/>}/>
          <Route path ="/sign" element={<SignInThree/>}/>
          <Route path ="/signup" element={<SignUpThree/>}/>
          <Route path ="/contact" element={<ContactPageTwo/>}/>
        </Route>
      </Routes>
        <Footer/>
     </UserContextProvider>
  );
}

export default App;
