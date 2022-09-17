import ToDo from "../toDo";
import { Container } from "./style";

const ListTodo = ({ toDos }) => {
  return (
    <Container>
      {toDos.length > 0 ? (
        toDos.map((e) => <ToDo toDo={e} />)
      ) : (
        <h3>Voce ainda não tem tarefas</h3>
      )}
    </Container>
  );
};
export default ListTodo;
