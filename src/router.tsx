import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ConsultAlocation } from "./pages/Alocation/ConsultAlocation";
import { RegisterAlocation } from "./pages/Alocation/RegisterAlocation";
import { Home } from "./pages/Home";


const Router = () => {
  return (
	<div className=" h-screen">
		<BrowserRouter>
		<Routes>
			<Route path="/" element={<Home/>}/>
			<Route path="/register" element={<RegisterAlocation/>}/>
			<Route path="/consult" element={<ConsultAlocation/>} />
			<Route path="/feed" />
		</Routes>
		</BrowserRouter>
	</div>
  );
};

export default Router;
