import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

import { toast } from "react-toastify";
import api from "../../services";

export const ToDoContext = createContext();

export const ToDoProvider = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);
  const [listToDo, setListToDO] = useState();
  const getAllToDo = (user_token) => {
    api
      .get(`to-do/`, { headers: { Authorization: `Token ${user_token}` } })
      .then((res) => setListToDO(res.data))
      .catch((err) => console.log(err));
  };

  const createToDo = (user_token, data) => {
    api
      .post("to-do/create/", data, {
        headers: { Authorization: `Token ${user_token}` },
      })
      .then((res) => {
        toast.success("Tarefa adicionada com sucesso");
        getAllToDo(user_token);
        setOpenModal(false);
      })
      .catch((err) => toast.error("Não foi possivel adicionar"));
  };

  const completedToDo = (user_token, toDo_id) => {
    api
      .get(`to-do/${toDo_id}/completed/`, {
        headers: { Authorization: `Token ${user_token}` },
      })
      .then((res) => {
        toast.success("Tarefa concluida com sucesso");
        getAllToDo(user_token);
      });
  };

  const deleteToDo = (user_token, toDo_id) => {
    api
      .delete(`to-do/${toDo_id}/`, {
        headers: { Authorization: `Token ${user_token}` },
      })
      .then((res) => {
        toast.success("Tarefa excluida com sucesso");
        getAllToDo(user_token);
      });
  };
  return (
    <ToDoContext.Provider
      value={{
        getAllToDo,
        listToDo,
        createToDo,
        completedToDo,
        deleteToDo,
        openModal,
        setOpenModal,
      }}
    >
      {children}
    </ToDoContext.Provider>
  );
};

export const useToDo = () => useContext(ToDoContext);
