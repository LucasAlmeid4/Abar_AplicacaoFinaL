import { useRef } from "react";
import api from "../../service/api";

export default function Cadastro() {
  const username = useRef();
  const password = useRef();

  function addUser(event) {
    event.preventDefault();
    api
      .post("/user", {
        username: username.current.value,
        password: password.current.value,
        authorities: "ROLE_USER",
      })
      .then((res) => {
        alert(`O ${res.data.username} foi adicionado com sucesso`);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <h3 className="mt-5">Adicionar User</h3>
      <form onSubmit={addUser}>
        <div className="form-group">
          <label>Username</label>
          <input type="text" className="form-control" ref={username} />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" ref={password} />
        </div>
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
    </>
  );
}
