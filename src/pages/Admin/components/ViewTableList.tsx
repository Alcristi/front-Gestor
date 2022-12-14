import axios, { AxiosRequestConfig } from "axios";
import { ReactElement, ReactHTMLElement, useState } from "react";
import { Link } from "react-router-dom";
import { EditAdmin } from "../EditAdmin";
import { HiOutlinePencil, HiOutlineTrash } from "react-icons/hi";
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
  setData: Function;
}) => {
  const [valueEdit, setEdit] = useState(false);
  const [dataEdit, setDataEdit] = useState({} as TypeAllocation);
  let arrayAux: TypeAllocation[] = [];

  async function deleteAlocation(id_D: string) {
    let payload: AxiosRequestConfig<any> = { data: { id: id_D } };
    let response = await axios.delete(
      (import.meta.env.URL || "https://back-gestao.herokuapp.com") + "/admin",
      payload
    );
    data.forEach((element, index) => {
      if (element._id !== id_D) arrayAux.push(element);
    });
    setData(arrayAux);
  }
  if (valueEdit) {
    return (
      <EditAdmin
        data={dataEdit}
        setView={setView}
        setDataEdit={setDataEdit}
        setEdit={setEdit}
      />
    );
  }
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
              <tbody key={element._id} className="">
                <tr>
                  <td
                    className=" border w-60 h-fit border-r border-gray-800 text-center whitespace-nowrap"
                    scope="row"
                  >
                    {element.cnpj}
                  </td>
                  <td className=" border w-60 h-fit border-r border-gray-800 text-center ">
                    {element.razaoSocial}
                  </td>
                  <td className=" border w-60 h-fit border-r border-gray-800 text-center ">
                    {element.operacao}
                  </td>
                  <td className=" border w-60 h-fit border-r border-gray-800 text-center ">
                    {element.dataOperacao}
                  </td>
                  <td className=" border w-60 h-fit border-r border-gray-800 text-center ">
                    {element.cotas}
                  </td>
                  <td className=" border w-60 h-fit border-r border-gray-800 text-center ">
                    {"R$" + element.valor.toFixed(2)}
                  </td>
                  <td className="  w-60 h-fit border-gray-800">
                    <button
                      onClick={() => {
                        setDataEdit(element);
                        setEdit(true);
                      }}
                      className="ml-2 text-2xl pt-[0.5em]"
                    >
                      <HiOutlinePencil />
                    </button>
                    <button
                      className="ml-2 text-2xl  pt-[0.5em]"
                      onClick={(e) => {
                        deleteAlocation(element._id);
                      }}
                    >
                      <HiOutlineTrash />
                    </button>
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
