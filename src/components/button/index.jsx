import { ButtonStyled } from "./style";

const Button = ({ bg_color, color, children, ...rest }) => {
  return (
    <ButtonStyled bg_color={bg_color} color={color} {...rest}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
