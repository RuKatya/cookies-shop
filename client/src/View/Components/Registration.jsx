import { Button, FormControl, InputLabel, FilledInput } from "@mui/material";
import { Link } from "react-router-dom";

const Registration = () => {
  const formRegFields = [
    { name: "name", title: "Name" },
    { name: "lastName", title: "Last name" },
    { name: "email", title: "Email" },
    { name: "password", title: "Password" },
  ];

  function hendleRegist(e) {
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
    <div className="registForm">
      <h2>Registration</h2>
      <form onSubmit={hendleRegist}>
        {formRegFields.map((field, index) => {
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
        You have account?{" "}
        <Link to="/auth" className="loginBtn">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Registration;
