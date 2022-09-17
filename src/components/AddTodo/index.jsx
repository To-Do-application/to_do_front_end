import { BsPencil } from "react-icons/bs";
import { MdOutlineDescription } from "react-icons/md";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useToDo } from "../../providers/toDos";
import { useState } from "react";
import { Container } from "./style";
import { AiFillCloseCircle } from "react-icons/ai";
const AddTodo = () => {
  const { createToDo, openModal, setOpenModal } = useToDo();
  const [userToken] = useState(localStorage.getItem("@token"));
  const FormSchema = yup.object().shape({
    title: yup.string().required("Campo Obrigatório"),
    description: yup.string().required("Campo Obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(FormSchema) });
  const onSubmit = (data) => {
    createToDo(userToken, data);
  };
  return (
    <>
      {openModal && (
        <Container>
          <div>
            <h3>Adicione mais uma tarefa</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
              <section>
                <div>
                  <span>
                    <BsPencil />
                  </span>
                  <input
                    type="text"
                    placeholder="Escreva aqui seu titulo"
                    {...register("title")}
                  />
                </div>
                <div className="text-area">
                  <span>
                    <MdOutlineDescription />
                  </span>
                  <textarea
                    placeholder="Uma descrição do que fazer"
                    {...register("description")}
                  />
                </div>
                <button type="submit">Criar</button>
              </section>
              <p
                className=""
                onClick={() => {
                  setOpenModal(false);
                }}
                style={{ cursor: "pointer" }}
              >
                <AiFillCloseCircle />
              </p>
            </form>
          </div>
        </Container>
      )}
    </>
  );
};
export default AddTodo;
