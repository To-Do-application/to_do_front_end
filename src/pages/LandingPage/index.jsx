import { useNavigate } from "react-router-dom";
import Button from "../../components/button";
import { Container } from "./style";
const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <div>
        <h1>
          do<span>.</span>it
        </h1>
        <p>Organize-se de forma mais fácil e efetiva</p>
        <section>
          <Button
            bg_color="#f5f5f5"
            color="#000"
            onClick={() => navigate("/register")}
          >
            Cadastre-se
          </Button>
          <Button onClick={() => navigate("/login")}>Login</Button>
        </section>
      </div>
    </Container>
  );
};
export default LandingPage;
