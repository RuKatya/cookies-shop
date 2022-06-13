import { Button, FormControl, InputLabel, FilledInput } from "@mui/material";
import { Link } from "react-router-dom";

const Login = () => {
  const formLogFields = [
    { name: "email", title: "Email" },
    { name: "password", title: "Password" },
  ];

  function hendleLogin(e) {
    e.preventDefault();

    const formObj = {};

    for (let field of e.target) {
      if (field.type !== "submit") {
        formObj[field.name] = field.value;
      }
    }

    console.log(formObj);

    e.target.reset();
  }
  return (
    <div className="loginForm">
      <h2>Login</h2>
      <form onSubmit={hendleLogin}>
        {formLogFields.map((field, index) => {
          return (
            <FormControl variant="filled" key={index}>
              <InputLabel htmlFor={field.name}>{field.title}</InputLabel>
              <FilledInput
                id={field.name}
                name={field.name}
                required
                sx={{ background: "none" }}
              />
            </FormControl>
          );
        })}

        <Button color="success" type="submit">
          Send
        </Button>
      </form>
      <p>
        <Link to="/auth/registration" className="registBtn">
          Registration
        </Link>
      </p>
    </div>
  );
};

export default Login;
