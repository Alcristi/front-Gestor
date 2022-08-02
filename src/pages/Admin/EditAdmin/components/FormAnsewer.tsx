import { Link } from "react-router-dom";

export const FormAnswered = ({
  isAnswer,
  setAnswer,
  setEdit,
  setView,
}: {
  isAnswer: boolean;
  setAnswer: Function;
  setEdit: Function;
  setView: Function;
}) => {
  return (
    <div className="flex flex-col h-screen justify-evenly">
      <p className="text-4xl text-center">Alocação feita com sucesso.</p>
      <div className="flex justify-evenly">
        <Link to="/">
          <span
            className="p-2 pl-14 pr-14 w-fit ml-auto mr-auto rounded font-semibold border-2 border-gray-500 hover:bg-gray-700 hover:text-gray-200 hover:border-gray-700"
            onClick={() => {
              setAnswer(false);
              setEdit(false);
              setView(false);
            }}
          >
            Voltar para Home
          </span>
        </Link>
        <Link to="/admin">
          <span
            className="p-2 pl-14 pr-14 w-fit ml-auto mr-auto rounded font-semibold border-2 border-gray-500 hover:bg-gray-700 hover:text-gray-200 hover:border-gray-700"
            onClick={() => {
              setAnswer(false);
              setEdit(false);
              setView(false);
            }}
          >
            Consultar novamente
          </span>
        </Link>
      </div>
    </div>
  );
};
