import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import ProfileAxios from "../../service/PerfilInfoClass";
import './estilos.css';

export default function FormularioPerfil() {
  const [profile, setProfile] = useState([]);

  const getProfile = () => {
    ProfileAxios.getProfile()
      .then((response) => {
        setProfile(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <>
      <div class="card col-lg-3 col-12">
        <div className="">
          <img
            className="img-perfilx"
            src={profile.imagemperfil}
            class="card-img-top"
            alt="..."
          />
          <div class="">
            <p id="nome">{profile.nome}</p>
            <p id="genero">{profile.text}</p>
            <button
              type="button"
              class="btn btn-success mb-2"
              data-bs-toggle="modal"
              data-bs-target="#UpdateModal"
            >
              <a href="/createperfil">
                Edite <i class="fas fa-pencil-alt"></i>
              </a>
            </button>{" "}
          </div>
        </div>
      </div>
    </>
  );
}