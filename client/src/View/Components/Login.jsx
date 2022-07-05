import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Button, FormControl, InputLabel, FilledInput } from "@mui/material";
import { getAllRegUser } from "../../store/selectors/auth";
import { loginUser } from "../../store/actions/user";

const Login = () => {
  let navigate = useNavigate();
  const users = useSelector(getAllRegUser);

  const [massege, setMassege] = useState("");

  const dispatch = useDispatch();

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

    const userExist = users.find((user) => user.email === formObj.email);

    console.log(userExist);

    if (userExist) {
      if (userExist.password === formObj.password) {
        dispatch(loginUser(userExist));
        setMassege("");
        navigate("/");
      } else {
        setMassege(`Password not correct`);
      }
    } else {
      setMassege(`User not exist`);
    }

    e.target.reset();
  }
  return (
    <div className="loginForm">
      <h2>Login</h2>
      <form onSubmit={hendleLogin}>
        {massege ? <div>{massege}</div> : null}
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
