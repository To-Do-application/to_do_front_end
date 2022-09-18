import { useEffect } from "react";
import AddTodo from "../../components/AddTodo";
import Header from "../../components/Header";
import ListTodo from "../../components/ListToDos";
import { useToDo } from "../../providers/toDos";
import { useUser } from "../../providers/users";
import { Navigate } from "react-router-dom";

const DashboardPage = () => {
  const { verifyUserAuthenticated, isLoggedIn } = useUser();
  const { getAllToDo, listToDo } = useToDo();

  useEffect(() => {
    getAllToDo(localStorage.getItem("@token"));
    verifyUserAuthenticated();
  }, []);

  if (!isLoggedIn) {
    return <Navigate to={"/"} />;
  }
  return (
    <>
      <Header />
      <AddTodo />
      <ListTodo toDos={listToDo} />
    </>
  );
};
export default DashboardPage;
