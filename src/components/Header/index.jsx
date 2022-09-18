import { Container } from "./style";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useToDo } from "../../providers/toDos";
import { useState } from "react";
import {
  BsFillArrowDownCircleFill,
  BsFillArrowUpCircleFill,
} from "react-icons/bs";
const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
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
      <section className="open-header-functions">
        <section onClick={() => setOpenMenu(true)}>
          <p className="open">
            <BsFillArrowDownCircleFill size={20} />
          </p>
          <p className="close">
            <BsFillArrowUpCircleFill size={20} />
          </p>
        </section>
      </section>
    </Container>
  );
};
export default Header;
