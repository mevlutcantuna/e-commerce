import { useState } from "react";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

function LoginPage(props) {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {isOpen ? (
        <SignUp
          handleActivePage={props.handleActivePage}
          handleIsOpen={handleIsOpen}
        />
      ) : (
        <SignIn
          handleActivePage={props.handleActivePage}
          handleIsOpen={handleIsOpen}
        />
      )}
    </div>
  );
}

export default LoginPage;
