import { useState } from "react"

type TaskProps = {
    id: number;
    name: string;
    doneFn: Function;
    deleteFn: Function; //Function type
  }
  
  const Task = ({id, name, deleteFn , doneFn} : TaskProps) => {
    const [Mouse, IsMouseInside] = useState<boolean>(false);
    return (
        <div className="flex justify-between h-8 items-center py-6 border-b" onMouseEnter={() => IsMouseInside(true)} onMouseLeave={() => IsMouseInside(false)}>
        <span className="text-2xl"> {name}</span>
        <div className="flex space-x-1 items-center" style={(Mouse) ? { visibility: "visible" } : { visibility: "hidden" }}>
            <button className="bg-green-400 w-24 text-2xl" onClick={() => doneFn(id)} >Done</button>
            <button className="bg-red-400 w-24 text-2xl" onClick={() => deleteFn(id)}>Delete</button>
        </div>
    </div>
)
}
  
  export default Task