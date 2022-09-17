import { Container } from "./style";
import { TbCheckupList } from "react-icons/tb";
import { BsTrash } from "react-icons/bs";
import { useToDo } from "../../providers/toDos";
import { useState } from "react";
const ToDo = ({ toDo }) => {
  const { completedToDo, deleteToDo } = useToDo();
  const [userToken] = useState(localStorage.getItem("@token"));

  return (
    <>
      <Container>
        <p className="title">
          <span>
            <TbCheckupList />
          </span>
          {toDo.title}
        </p>
        <hr />
        <p>{toDo.description}</p>
        <p>15 de setembro de 2022</p>
        <button onClick={() => completedToDo(userToken, toDo.id)}>
          Concluir
        </button>
        <button onClick={() => deleteToDo(userToken, toDo.id)}>
          <BsTrash />
        </button>
      </Container>
    </>
  );
};
export default ToDo;
