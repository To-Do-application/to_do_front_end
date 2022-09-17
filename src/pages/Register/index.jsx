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
import { BsPersonCheck } from "react-icons/bs";
import { GrUserSettings } from "react-icons/gr";
const LoginPage = () => {
  const { userRegister, verifyUserAuthenticated, isLoggedIn } = useUser();

  const navigate = useNavigate();

  useEffect(() => {
    verifyUserAuthenticated();
  }, []);

  if (isLoggedIn) {
    navigate("/dashboard");
  }

  const FormSchema = yup.object().shape({
    username: yup.string().required("Campo Obrigatório"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .matches(/(?=.*[a-z])/, "Requer uma letra minuscula")
      .matches(/(?=.*[A-Z])/, "Requer uma letra maiuscula")
      .matches(/(?=.*[0-9])/, "Requer um numero")
      .matches(/(?=.*[!$*&@#])/, "Requer um caracter especial")
      .min(8, "Requer mínimo de 8 caracteres"),
    email: yup.string().required("Digite um email").email("Email Inválido"),
    first_name: yup.string().required("Digite seu primeiro nome"),
    last_name: yup.string().required("Digite seu sobrenome"),
    passwordConfirmation: yup
      .string()
      .required("Confirme sua senha")
      .oneOf([yup.ref("password"), null], "As senhas não coincidem"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(FormSchema) });

  const OnSubmitForm = (data) => {
    userRegister(data);
  };

  return (
    <Container>
      <section className="login-image">
        <img src={svgLogin} alt="" />
      </section>
      <section className="form-login">
        <h1>Cadastro</h1>
        <form onSubmit={handleSubmit(OnSubmitForm)}>
          <p>
            Primeiro nome
            {errors.first_name && <span> - {errors.first_name.message}</span>}
          </p>
          <div>
            <span>
              <BsPersonCheck />
            </span>
            <input
              type="text"
              placeholder="Seu primeiro nome"
              {...register("first_name")}
            />
          </div>
          <p>
            Sobrenome
            {errors.last_name && <span> - {errors.last_name.message}</span>}
          </p>
          <div>
            <span>
              <BsPersonCheck />
            </span>
            <input
              type="text"
              placeholder="Seu ultimo nome"
              {...register("last_name")}
            />
          </div>
          <p>
            Nome de usuário
            {errors.username && <span> - {errors.username.message}</span>}
          </p>
          <div>
            <span>
              <GrUserSettings />
            </span>
            <input
              type="text"
              placeholder="Seu nome de usuário"
              {...register("username")}
            />
          </div>
          <p>
            Email
            {errors.email && <span> - {errors.email.message}</span>}
          </p>
          <div>
            <span>
              <HiOutlineMail />
            </span>
            <input
              type="text"
              placeholder="Seu melhor email"
              {...register("email")}
            />
          </div>
          <p>
            Senha
            {errors.password && <span> - {errors.password.message}</span>}
          </p>
          <div>
            <span>
              <RiLockPasswordLine />
            </span>
            <input
              type="password"
              placeholder="Sua senha"
              {...register("password")}
            />
          </div>
          <p>
            Confirme sua senha
            {errors.passwordConfirmation && (
              <span> - {errors.passwordConfirmation.message}</span>
            )}
          </p>
          <div>
            <span>
              <RiLockPasswordLine />
            </span>
            <input
              type="password"
              placeholder="Confirme sua senha"
              {...register("passwordConfirmation")}
            />
          </div>
          <button type="submit">Entrar</button>
        </form>
        <p>
          Já possui cadastro? Clique{" "}
          <span onClick={() => navigate("/login")} className="redirect-span">
            aqui
          </span>{" "}
          para fazer login
        </p>
      </section>
    </Container>
  );
};
export default LoginPage;
