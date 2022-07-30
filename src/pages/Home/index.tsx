import { Link } from "react-router-dom";
import { Theme } from "../../components/themes";

export function Home(){
	return (
		<Theme>
			<div className=" ">
				<div className="flex flex-col items-center justify-evenly w-50 h-80">
						<div>
							<Link to="/register">
								<span className="bg-white text-gray-800 border rounded-2xl border-gray-800 p-4 w-50 block hover:bg-gray-700 hover:text-white hover:border-black" >Cadastre Sua Alocação Financeira</span>
							</Link>
						</div>
						<div>
							<Link to="/consult">
								<span className= "bg-white text-gray-800 border  border-gray-800 rounded-2xl p-4 w-50 block hover:bg-gray-700 hover:text-white  hover:borderblack" >Consulte Sua Alocação Financeira</span>
							</Link>
						</div>
				</div>
			</div>
		</Theme>
	)
}
