import MainPage from "./Pages/MainPage";
import ForgetPass from "./Pages/ForgetPass";
import ForgetPhoneNumber from "./Pages/ForgetPhoneNumber";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="UserRecoveryPassForm" element={<ForgetPass />} />
        <Route path="StNoAndPassRecovery" element={<ForgetPhoneNumber />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
