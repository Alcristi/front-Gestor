import { Link } from "react-router-dom"

export type TypeAllocation = {
	cnpj:string;
	razaoSocial:string;
	dataConsulta:string;
	valorUnitario: number;
	numeroCotas:number;
	valorMedio: number
	retorno:number;
	saldo:number;
}

export const ViewTable = ({data,setView}:{data:TypeAllocation,setView:Function}) => {
    return (
	<div className="h-[25em] mt-40 flex flex-col justify-around">
		<div className="h-fit ">
			<table className="">
				<thead className="">
					<tr>
						<th className="border border-gray-800 align-middle text-white bg-slate-700 text-center" scope="col">CNPJ</th>
						<th className="border border-gray-800 align-middle text-white bg-slate-700 text-center" scope="col">Razão Social</th>
						<th className="border border-gray-800 align-middle text-white bg-slate-700 text-center" scope="col">Data da Consulta</th>
						<th className="border border-gray-800 align-middle text-white bg-slate-700 text-center" scope="col">Valor unitário da cota</th>
						<th className="border border-gray-800 align-middle text-white bg-slate-700 text-center" scope="col">Números de cotas</th>
						<th className="border border-gray-800 align-middle text-white bg-slate-700 text-center" scope="col">Preço médio</th>
						<th className="border border-gray-800 align-middle text-white bg-slate-700 text-center" scope="col">Retorno da operação</th>
						<th className="border border-gray-800 align-middle text-white bg-slate-700 text-center" scope="col">Saldo de aplicação no Fundo</th>
					</tr>
				</thead>
				<tbody className="border border-gray-800 rounded-b-md">
					<tr>
						<td className=" w-60 h-14 border-r border-gray-800 text-center whitespace-nowrap" scope="row">{data.cnpj}</td>
						<td className=" w-60 h-14 border-r border-gray-800 text-center ">{data.razaoSocial}</td>
						<td className=" w-60 h-14 border-r border-gray-800 text-center ">{data.dataConsulta}</td>
						<td className=" w-60 h-14 border-r border-gray-800 text-center ">{'R$'+data.valorUnitario}</td>
						<td className=" w-60 h-14 border-r border-gray-800 text-center ">{data.numeroCotas}</td>
						<td className=" w-60 h-14 border-r border-gray-800 text-center ">{'R$'+data.valorMedio.toFixed(2)}</td>
						<td className=" w-60 h-14 border-r border-gray-800 text-center ">{(data.retorno *100).toFixed(2)+'%'}</td>
						<td className=" w-60 h-14 border-gray-800 text-center ">{'R$'+data.saldo}</td>
					</tr>
				</tbody>
			</table>
		</div>
		<div className="flex justify-around">
			<Link to='/'>
				<span className="p-2 pl-14 pr-14 w-fit ml-auto mr-auto rounded block font-semibold border-2 border-gray-500 hover:bg-gray-700 hover:text-gray-200 hover:border-gray-700" onClick={()=>{setView(false)}}>Home</span>
			</Link>
			<Link to='/consult'>
				<span className="p-2 pl-14 pr-14 w-fit ml-auto mr-auto rounded block font-semibold border-2 border-gray-500 hover:bg-gray-700 hover:text-gray-200 hover:border-gray-700" onClick={()=>{setView(false)}}>Nova Consulta</span>
			</Link>
		</div>
	</div>


    )
}
