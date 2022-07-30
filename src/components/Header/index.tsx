import { Fragment } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
	<div  className="w-screen h-20 bg-gray-800  ">
	<Link to='/'>
		<div className="flex w-screen h-20 bg-gray-800 justify-center items-center cursor-pointer">
			<span className="align-middle text-3xl text-gray-300 font-semibold">Gestão Financeira Sa</span>
		</div>
	</Link>
	</div>
  );
};
