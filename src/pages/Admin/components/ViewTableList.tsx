import axios, { AxiosRequestConfig } from "axios";
import { ReactElement, ReactHTMLElement, useState } from "react";
import { Link } from "react-router-dom";
import { EditAdmin } from "../EditAdmin";

export type TypeAllocation = {
  _id: string;
  cnpj: string;
  razaoSocial: string;
  operacao: string;
  dataOperacao: string;
  cotas: number;
  valor: number;
};
export const ViewTableList = ({
  data,
  setView,
  setData,
}: {
  data: TypeAllocation[];
  setView: Function;
  setData:Function;
}) => {
	const[valueEdit,setEdit] = useState(false)
	const [dataEdit,setDataEdit] = useState({} as TypeAllocation)
  let arrayAux:TypeAllocation[] = []
  async function deleteAlocation(id_D:string){
  let payload:AxiosRequestConfig<any> ={data:{id:id_D}} 
  let response = await axios.delete((import.meta.env.URL || "http://localhost:3000")+"/admin" ,payload);
  data.forEach((element,index) => {
    if(element._id !== id_D)
      arrayAux.push(element)
  });
  setData(arrayAux);
  };

  return (
    <div>
      <div className="h-fit flex flex-col justify-around mt-20">
        <div className="h-fit ">
          <table className="">
            <thead className="">
              <tr>
                <th
                  className="border border-gray-800 align-middle text-white bg-slate-700 text-center"
                  scope="col"
                >
                  CNPJ
                </th>
                <th
                  className="border border-gray-800 align-middle text-white bg-slate-700 text-center"
                  scope="col"
                >
                  Razão Social
                </th>
                <th
                  className="border border-gray-800 align-middle text-white bg-slate-700 text-center"
                  scope="col"
                >
                  Operação
                </th>
                <th
                  className="border border-gray-800 align-middle text-white bg-slate-700 text-center"
                  scope="col"
                >
                  Data da Operação
                </th>
                <th
                  className="border border-gray-800 align-middle text-white bg-slate-700 text-center"
                  scope="col"
                >
                  Números de cotas
                </th>
                <th
                  className="border border-gray-800 align-middle text-white bg-slate-700 text-center"
                  scope="col"
                >
                  Preço da cota na operação
                </th>
              </tr>
            </thead>
            {data.map((element) => (
              <tbody key={element._id} className="border border-gray-800 rounded-b-md">
                <tr>
                  <td
                    className=" w-60 h-fit border-r border-gray-800 text-center whitespace-nowrap"
                    scope="row"
                  >
                    {element.cnpj}
                  </td>
                  <td className=" w-60 h-fit border-r border-gray-800 text-center ">
                    {element.razaoSocial}
                  </td>
                  <td className=" w-60 h-fit border-r border-gray-800 text-center ">
                    {element.operacao}
                  </td>
                  <td className=" w-60 h-fit border-r border-gray-800 text-center ">
                    {element.dataOperacao}
                  </td>
                  <td className=" w-60 h-fit border-r border-gray-800 text-center ">
                    {element.cotas}
                  </td>
                  <td className=" w-60 h-fit border-r border-gray-800 text-center ">
                    {"R$" + element.valor.toFixed(2)}
                  </td>
                  <td className=" w-60 h-fit border-r border-gray-800 text-center ">
                    {" "}
                    <button onClick={() => { setDataEdit(element);setEdit(true) }}>
                      {" "}
                      Edit{" "}
                    </button>{" "}
                    <button onClick={(e) => { deleteAlocation(element._id)}}>Delete</button>{" "}
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
      <div className="flex justify-around mt-10">
        <Link to="/">
          <span
            className="p-2 pl-14 pr-14 w-fit ml-auto mr-auto rounded block font-semibold border-2 border-gray-500 hover:bg-gray-700 hover:text-gray-200 hover:border-gray-700"
            onClick={() => {
              setView(false);
            }}
          >
            Home
          </span>
        </Link>
        <Link to="/admin">
          <span
            className="p-2 pl-14 pr-14 w-fit ml-auto mr-auto rounded block font-semibold border-2 border-gray-500 hover:bg-gray-700 hover:text-gray-200 hover:border-gray-700"
            onClick={() => {
              setView(false);
            }}
          >
            Nova Consulta
          </span>
        </Link>
      </div>
    </div>
  );
};
