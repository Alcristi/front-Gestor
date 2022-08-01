import { Link } from "react-router-dom"

export const FormAnswered = ({isAnswer,setAnswer}:{isAnswer:boolean,setAnswer:Function}) => {
    return (
        <div className="grid h-screen place-items-center">
            <p className="text-4xl text-center">
				Alocação feita com sucesso.
            </p>
			<Link to='/'>
				<span className="p-2 pl-14 pr-14 w-fit ml-auto mr-auto rounded font-semibold border-2 border-gray-500 hover:bg-gray-700 hover:text-gray-200 hover:border-gray-700" onClick={()=>{setAnswer(false)}}>Voltar para Home</span>
			</Link>
        </div>
    )
}
