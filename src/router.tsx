import { BrowserRouter, Route, Routes } from "react-router-dom";
import { EditAdmin } from "./pages/Admin/EditAdmin";
import { ListAdmin } from "./pages/Admin/ListAdmin";
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
			<Route path="/admin" element={<ListAdmin/>}/>
		</Routes>
		</BrowserRouter>
	</div>
  );
};

export default Router;
