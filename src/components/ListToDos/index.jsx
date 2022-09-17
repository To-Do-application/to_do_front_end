import ToDo from "../toDo";
import { Container } from "./style";

const ListTodo = ({ toDos }) => {
  return <Container>{toDos && toDos.map((e) => <ToDo toDo={e} />)}</Container>;
};
export default ListTodo;
