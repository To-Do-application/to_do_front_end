import { useEffect } from "react";
import AddTodo from "../../components/AddTodo";
import Header from "../../components/Header";
import ListTodo from "../../components/ListToDos";
import { useToDo } from "../../providers/toDos";

const DashboardPage = () => {
  const { getAllToDo, listToDo } = useToDo();

  useEffect(() => {
    getAllToDo(localStorage.getItem("@token"));
  }, []);

  return (
    <>
      <Header />
      <AddTodo />
      <ListTodo toDos={listToDo} />
    </>
  );
};
export default DashboardPage;
