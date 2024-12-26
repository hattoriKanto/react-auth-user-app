import { Route, Routes } from "react-router";
import { PathsData } from "./constants";
import { HomePage, NotFoundPage, SignUpPage, LoginPage } from "./pages";

const Root = () => {
  return (
    <Routes>
      <Route path={PathsData.root} element={<HomePage />} />
      <Route path={PathsData.logIn} element={<LoginPage />} />
      <Route path={PathsData.signUp} element={<SignUpPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default Root;
