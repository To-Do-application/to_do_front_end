import { Container } from "./style";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useToDo } from "../../providers/toDos";

const Header = () => {
  const { setOpenModal } = useToDo();
  const navigate = useNavigate();
  return (
    <Container>
      <h1>
        do<span>.</span>it
      </h1>
      <section className="header-functions">
        <button onClick={() => setOpenModal(true)}>Adicionar tarefa</button>
        <button
          onClick={() => {
            localStorage.clear();
            toast.success("Logout realizado com sucesso, redirecionando...");
            navigate("/");
          }}
        >
          Sair
        </button>
      </section>
    </Container>
  );
};
export default Header;
