import { Fragment } from "react";
import { Link } from "react-router-dom";

export const Footer= () => {
  return (
	<div  className="letf-0 right-0 h-10 bg-gray-800 fixed bottom-0">
		<div className="flex w-screen h-10 bg-gray-800 justify-center items-center cursor-pointer">
			<span className="align-middle  text-gray-300 font-semibold"> © 2022 Copyright: Gestão Financeira Sa</span>
		</div>
	</div>
  );
};
