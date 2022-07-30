import axios from "axios";
import { useState } from "react";
import { Theme } from "../../../components/themes";
import { ViewTable } from "./components/ViewTable";

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

export function ConsultAlocation() {
  const [cnpjValue, setCnpj] = useState("");
  const [valorValue, setvalor] = useState(0);
  const [viewValue,setView] = useState(false);
  const [dataValue,setData] = useState({} as TypeAllocation)
  let response:any
  const enviar = async (e: any) => {
    e.preventDefault();
      response = await axios.post((process.env.URL)+"/consult", {
      cnpj: cnpjValue,
      valor: valorValue,
    });
	setData(response.data)
	setView(true);
  };
  if(viewValue)
  {
	  return (
		<Theme>
			<ViewTable data={dataValue} setView={setView}/>
		</Theme>
		)
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
              Cadastre sua Alocação
            </label>
            <fieldset
              name="cadastro"
              className="flex flex-col h-[20em] justify-evenly border-t mt-2 border-gray-600"
            >
              <label htmlFor="cnpj" className="">
                <span className="ml-6 text-base block font-semibold">Cnpj</span>
                <input
                  required
                  value={cnpjValue}
                  onChange={(event) => {
                    setCnpj(event.target.value);
                  }}
                  type="text"
                  className="ml-6 border border-gray-400 rounded w-80 h-10 pl-3"
                  name="cnpj"
                  id="cnpj"
                  placeholder="XX. XXX. XXX/0001-XX"
                />
              </label>
              <label htmlFor="valor">
                <span className="ml-6 text-base block font-semibold">
                  Valor Atual da Cota
                </span>
                <input
                  required
                  value={valorValue}
                  onChange={(event) => {
                    let valor = parseFloat(
                      event.target.value == ""
                        ? "0"
                        : event.target.value.replace("0", "")
                    );
                    setvalor(valor);
                  }}
                  type="number"
                  step=".001"
                  className="ml-6 border border-gray-400 rounded w-80 h-10 pl-3"
                  name="valor"
                  id="valor"
                  placeholder="0.00"
                />
              </label>
              <button
                type="submit"
                className="p-2 pl-14 pr-14 w-fit ml-auto mr-auto rounded font-semibold border-2 border-gray-500 hover:bg-gray-700 hover:text-gray-200 hover:border-gray-700"
              >
                Enviar
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </Theme>
  );
}
