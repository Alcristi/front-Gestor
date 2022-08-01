import axios from "axios";
import { useState } from "react";
import { Theme } from "../../../components/themes";
import process from "process";
import { ViewTableList } from "../components/ViewTableList";
import { data } from "autoprefixer";
import { time } from "console";

export type TypeAllocation = {
  _id: string;
  cnpj: string;
  razaoSocial: string;
  operacao: string;
  dataOperacao: string;
  cotas: number;
  valor: number;
};

export function ListAdmin() {
  const [cnpjValue, setCnpj] = useState("");
  const [valorValue, setvalor] = useState("");
  const [viewValue, setView] = useState(false);
  const [dataValue, setData] = useState([{}] as Array<TypeAllocation>);
  const [countList, setCount] = useState(0);
  const [dateInitial, setDateInitial] = useState("");
  const [dateFinal, setDateFinal] = useState("");

  let response: any;
  const enviar = async (e: any) => {
    e.preventDefault();
    response = await axios.post(
      (import.meta.env.URL || "http://localhost:3000") + "/admin",
      {
        initialDate: dateInitial,
        finalDate: dateFinal,
      }
    );
    console.log(response.data);
    setData(response.data);
    setView(true);
  };

  if (viewValue) {
    return (
      <Theme>
        <ViewTableList data={dataValue} setView={setView} setData={setData} />
      </Theme>
    );
  }

  return (
    <Theme>
      <div className="w-96 h-[25em] bg-gray-100 border rounded border-gray-600 mt-10 ml-auto mr-auto">
        <div className="h-[25em]">
          <form onSubmit={enviar} className=" h-[25em]">
            <label
              htmlFor="cadastro"
              className=" block w-fit h-fit ml-auto mr-auto mt-4 font-semibold text-lg"
            >
              Pesquise por Operações
            </label>
            <fieldset
              name="cadastro"
              className="flex flex-col h-[20em] justify-evenly border-t mt-2 border-gray-600"
            >
              <label htmlFor="dataOperacao">
                <span className="ml-6 text-base block font-semibold">
                  Data da Inicial
                </span>
                <input
                  required
                  value={dateInitial}
                  onChange={(event) => {
                    setDateInitial(event.target.value);
                  }}
                  type="data"
                  className="ml-6 border border-gray-400 rounded w-80 h-10 pl-3"
                  name="dataOperacao"
                  id="dataOperacao"
                  placeholder="DD/MM/AAAA"
                  autoComplete="off"
                />
              </label>
              <label htmlFor="dataOperacao">
                <span className="ml-6 text-base block font-semibold">
                  Data Final
                </span>
                <input
                  required
                  value={dateFinal}
                  onChange={(event) => {
                    setDateFinal(event.target.value);
                  }}
                  type="data"
                  className="ml-6 border border-gray-400 rounded w-80 h-10 pl-3"
                  name="dataOperacao"
                  id="dataOperacao"
                  placeholder="DD/MM/AAAA"
                  autoComplete="off"
                />
              </label>
              <button
                type="submit"
                className="p-2 pl-14 pr-14 w-fit ml-auto mr-auto rounded font-semibold border-2 border-gray-500 hover:bg-gray-700 hover:text-gray-200 hover:border-gray-700"
              >
                Buscar
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </Theme>
  );
}
