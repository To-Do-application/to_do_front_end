import { HiOutlineMail } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Container } from "./style";
import svgLogin from "../../assets/login.svg";
import { useUser } from "../../providers/users";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const { userLogin, verifyUserAuthenticated, isLoggedIn } = useUser();

  const navigate = useNavigate();

  useEffect(() => {
    verifyUserAuthenticated();
  }, []);

  if (isLoggedIn) {
    navigate("/dashboard");
  }

  const FormSchema = yup.object().shape({
    username: yup.string().required("Campo Obrigatório"),
    password: yup.string().required("Campo Obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(FormSchema) });

  const OnSubmitForm = (data) => {
    userLogin(data);
  };

  return (
    <Container>
      <section className="login-image">
        <img src={svgLogin} alt="" />
      </section>
      <section className="form-login">
        <h1>Login</h1>
        <form onSubmit={handleSubmit(OnSubmitForm)}>
          <p>
            Nome de usuário
            {errors.username && <span> - {errors.username.message}</span>}
          </p>
          <div>
            <span>
              <HiOutlineMail />
            </span>
            <input
              type="text"
              placeholder="Seu nome de usuário"
              {...register("username")}
            />
          </div>
          <p>
            Senha{errors.password && <span> - {errors.password.message}</span>}
          </p>
          <div>
            <span>
              <RiLockPasswordLine />
            </span>
            <input
              type="password"
              placeholder="Senha"
              {...register("password")}
            />
          </div>
          <button type="submit">Entrar</button>
        </form>
        <p>
          Ainda não possui cadastro? Clique{" "}
          <span onClick={() => navigate("/register")} className="redirect-span">
            aqui
          </span>{" "}
          para realizar
        </p>
      </section>
    </Container>
  );
};
export default LoginPage;
