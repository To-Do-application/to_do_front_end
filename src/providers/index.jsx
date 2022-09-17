import { ToDoProvider } from "./toDos";
import { UserProvider } from "./users";

const Providers = ({ children }) => {
  return (
    <UserProvider>
      <ToDoProvider>{children}</ToDoProvider>
    </UserProvider>
  );
};

export default Providers;
