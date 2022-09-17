import { Link } from "react-router-dom";
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
      <nav>
        <Link to="/perfil">Perfil</Link>
      </nav>
      <button onClick={() => setOpenModal(true)}>Adicionar tarefa</button>
      <button
        onClick={() => {
          localStorage.clear();
          navigate("/");
          toast.success("Logout realizado com sucesso, redirecionando...");
        }}
      >
        Sair
      </button>
    </Container>
  );
};
export default Header;
