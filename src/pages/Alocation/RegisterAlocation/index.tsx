import { Link } from "react-router-dom";
import { Theme } from "../../../components/themes";
import http from "../../../http-common";
import axios from "axios";
import { FormEventHandler, useRef, useState,useLayoutEffect } from "react";
import { FormAnswered } from "./components/FormAnsewer";

export function RegisterAlocation() {
  const [cnpjValue, setCnpj] = useState("");
  const [razaoSocialValue, setRazaoSocial] = useState("");
  const [operacaoValue, setOperacao] = useState("compra");
  const [dataOperacaoValue, setDataOperacao] = useState("");
  const [cotasValue, setCotasValue] = useState(0);
  const [valorValue, setvalor] = useState(0);
  const [isAnswered,setIsAnswers] = useState(false)

  const enviar = async (e: any) => {
    e.preventDefault();
    let response = await axios.post("http://localhost:3000/register", {
      cnpj: cnpjValue,
      razaoSocial: razaoSocialValue,
      operacao: operacaoValue,
      dataOperacao: dataOperacaoValue,
      cotas: cotasValue,
      valor: valorValue,
    });
    setIsAnswers(true);
  };
  if (isAnswered) return <FormAnswered isAnswer={isAnswered} setAnswer={setIsAnswers}/>;
  return (
    <Theme>
      <div className="w-96 h-[35em] bg-gray-100 border rounded border-gray-600 mt-10 ml-auto mr-auto">
        <div className="h-[35em]">
          <form onSubmit={enviar} className=" h-[35em]">
            <label
              htmlFor="cadastro"
              className=" block w-fit h-fit ml-auto mr-auto mt-4 font-semibold text-lg"
            >
              Cadastre sua Alocação
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

              <label htmlFor="dataOperacao">
                <span className="ml-6 text-base block font-semibold">
                  Data da Operação
                </span>
                <input
                  required
                  value={dataOperacaoValue}
                  onChange={(event) => {
                    setDataOperacao(event.target.value);
                  }}
                  type="data"
                  className="ml-6 border border-gray-400 rounded w-80 h-10 pl-3"
                  name="dataOperacao"
                  id="dataOperacao"
                  placeholder="DD/MM/AAAA"
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
                    let cotas = parseInt(
                      event.target.value == ""
                        ? "0"
                        : event.target.value.replace("0", "")
                    );
                    setCotasValue(cotas);
                  }}
                  type="number"
                  className="ml-6 border border-gray-400 rounded w-80 h-10 pl-3"
                  name="cotas"
                  id="cotas"
                  placeholder="00"
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
