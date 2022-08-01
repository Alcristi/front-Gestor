import { Theme } from "../../../components/themes";
import axios from "axios";
import { useState } from "react";
import { FormAnswered } from "./components/FormAnsewer";
import { TypeAllocation } from "../components/ViewTableList";
import { Link } from "react-router-dom";

export function EditAdmin({
  data,
  setView,
  setDataEdit,
  setEdit,
}: {
  data: TypeAllocation;
  setView: Function;
  setDataEdit: Function;
  setEdit: Function;
}) {
  const [cnpjValue, setCnpj] = useState(data.cnpj);
  const [razaoSocialValue, setRazaoSocial] = useState(data.razaoSocial);
  const [operacaoValue, setOperacao] = useState(data.operacao);
  const [dateOperacaoValue, setDateOperacao] = useState(data.dataOperacao);
  const [cotasValue, setCotasValue] = useState(data.cotas.toString());
  const [valorValue, setvalor] = useState(data.valor.toString());
  const [isAnswered, setIsAnswers] = useState(false);
  const [idValue, setId] = useState(data._id);
  console.log(data._id);
  const enviar = async (e: any) => {
    e.preventDefault();
    let response = await axios.put(
      (import.meta.env.URL || "https://back-gestao.herokuapp.com/") + "/admin",
      {
        id: idValue,
        cnpj: cnpjValue,
        razaoSocial: razaoSocialValue,
        operacao: operacaoValue,
        dateOperacao: dateOperacaoValue,
        cotas: parseInt(cotasValue),
        valor: parseFloat(valorValue),
      }
    );
    console.log(response);
    setEdit(false);
  };
  if (isAnswered)
    return <FormAnswered isAnswer={isAnswered} setAnswer={setIsAnswers} />;
  return (
    <div className="w-96 h-[35em] bg-gray-100 border rounded border-gray-600 mt-10 ml-auto mr-auto">
      <div className="h-[35em]">
        <form onSubmit={enviar} className=" h-[35em]">
          <label
            htmlFor="cadastro"
            className=" block w-fit h-fit ml-auto mr-auto mt-4 font-semibold text-lg"
          >
            Edite essa Alocação
          </label>
          <fieldset
            name="cadastro"
            className="flex flex-col h-[32em] justify-evenly border-t mt-2 border-gray-600"
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
            <label htmlFor="razaoSocial">
              <span className="ml-6 text-base block font-semibold">
                Razão Social
              </span>
              <input
                required
                value={razaoSocialValue}
                onChange={(event) => {
                  setRazaoSocial(event.target.value);
                }}
                type="text"
                className="ml-6 border border-gray-400 rounded w-80 h-10 pl-3"
                name="razaoSocial"
                id="razaoSocial"
                placeholder="Nome da empresa"
              />
            </label>
            <div>
              <span className="ml-6 text-base block font-semibold">
                Operação
              </span>
              <div className="flex justify-around mt-2">
                <label htmlFor="operacao">
                  <input
                    type="radio"
                    className=" border border-gray-400"
                    name="operacao"
                    id="operacaoCompra"
                    hidden
                  />
                  <span
                    className={`p-2 pl-4 pr-4 rounded font-semibold border-2  hover:bg-gray-700 hover:text-gray-200 hover:border-gray-700 ${
                      operacaoValue == "compra"
                        ? "border-gray-700 bg-gray-700 text-gray-200"
                        : " border-gray-500 text-gray-700 "
                    }`}
                    onClick={() => {
                      setOperacao("compra");
                    }}
                  >
                    Compra
                  </span>
                </label>
                <label htmlFor="operacao">
                  <input
                    type="radio"
                    className=""
                    name="operacao"
                    id="operacaoVenda"
                    hidden
                  />
                  <span
                    className={`p-2 pl-6 pr-6 rounded font-semibold border-2  hover:bg-gray-700 hover:text-gray-200 hover:border-gray-700 ${
                      operacaoValue == "venda"
                        ? "border-gray-700 bg-gray-700 text-gray-200"
                        : " border-gray-500 text-gray-700 "
                    }`}
                    onClick={() => {
                      setOperacao("venda");
                    }}
                  >
                    Venda
                  </span>
                </label>
              </div>
            </div>

            <label htmlFor="dateOperacao">
              <span className="ml-6 text-base block font-semibold">
                Data da Operação
              </span>
              <input
                required
                value={dateOperacaoValue}
                onChange={(event) => {
                  setDateOperacao(event.target.value);
                }}
                type="data"
                className="ml-6 border border-gray-400 rounded w-80 h-10 pl-3"
                name="dateOperacao"
                id="dateOperacao"
                placeholder="DD/MM/AAAA"
                autoComplete="off"
              />
            </label>
            <label htmlFor="cotas">
              <span className="ml-6 text-base block font-semibold">
                Número de Cotas
              </span>
              <input
                required
                value={cotasValue}
                onChange={(event) => {
                  let regex = /^[0-9]+$/;
                  if (regex.test(event.target.value))
                    setCotasValue(event.target.value);
                  else
                    setCotasValue(
                      event.target.value.substring(
                        0,
                        event.target.value.length - 1
                      )
                    );
                }}
                type="string"
                className="ml-6 border border-gray-400 rounded w-80 h-10 pl-3"
                name="cotas"
                id="cotas"
                placeholder="00"
                autoComplete="off"
              />
            </label>
            <label htmlFor="valor">
              <span className="ml-6 text-base block font-semibold">
                Valor Unitário
              </span>
              <input
                required
                value={valorValue}
                onChange={(event) => {
                  let regex = /^[\d.?!]+$/;
                  if (regex.test(event.target.value))
                    setvalor(event.target.value);
                  else
                    setvalor(
                      event.target.value.substring(
                        0,
                        event.target.value.length - 1
                      )
                    );
                }}
                type="string"
                className="ml-6 border border-gray-400 rounded w-80 h-10 pl-3"
                name="valor"
                id="valor"
                placeholder="0.00"
                autoComplete="off"
              />
            </label>
            <div className="flex justify-around">
              <button
                type="submit"
                className="p-2 pl-14 pr-14 w-fit ml-auto mr-auto rounded font-semibold border-2 border-gray-500 hover:bg-gray-700 hover:text-gray-200 hover:border-gray-700"
              >
                Editar
              </button>
              <Link
                to="/admin"
                className="p-2 pl-14 pr-14 w-fit ml-auto mr-auto rounded font-semibold border-2 border-gray-500 hover:bg-gray-700 hover:text-gray-200 hover:border-gray-700"
                onClick={() => {
                  setEdit(false);
                }}
              >
                Voltar
              </Link>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
}
