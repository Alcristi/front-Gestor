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
	<div className="">
		<div className="">
			<table className="">
				<thead className="">
					<tr>
						<th className="" scope="col">CNPJ</th>
						<th className="" scope="col">Razão Social</th>
						<th className="" scope="col">Data da Consulta</th>
						<th className="" scope="col">Valor unitário da cota</th>
						<th className="" scope="col">Números de cotas</th>
						<th className="" scope="col">Preço médio</th>
						<th className="" scope="col">Retorno da operação</th>
						<th className="" scope="col">Saldo de aplicação no Fundo</th>
					</tr>
				</thead>
				<tbody className="border">
					<tr>
						<td className="" scope="row">{data.cnpj}</td>
						<td className="">{data.razaoSocial}</td>
						<td className="">{data.dataConsulta}</td>
						<td className="">{'R$'+data.valorUnitario}</td>
						<td className="">{data.numeroCotas}</td>
						<td className="">{'R$'+data.valorMedio.toFixed(2)}</td>
						<td className="">{(data.retorno *100).toFixed(2)+'%'}</td>
						<td className="">{'R$'+data.saldo}</td>
					</tr>
				</tbody>
			</table>
		</div>
		<Link to='/'>
			<span className="p-2 pl-14 pr-14 w-fit ml-auto mr-auto rounded font-semibold border-2 border-gray-500 hover:bg-gray-700 hover:text-gray-200 hover:border-gray-700" onClick={()=>{setView(false)}}>Voltar para Home</span>
		</Link>
	</div>


    )
}
