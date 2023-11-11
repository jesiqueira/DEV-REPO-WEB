import React from "react";

const Repositories = ({ repositories, onDelete, onNewRepo }) => {
  const [newRepo, setNewRepo] = React.useState();
  return (
    <div className="repositories">
      <h2 className="title">Repositórios</h2>
      <ul className="list">
        {repositories.map((repositorio) => (
          <li className="item" key={repositorio._id}>
            <div className="info">
              <div className="owner">
                {repositorio.name.substring(0, repositorio.name.indexOf("/"))}
              </div>
              <div className="name">
                {repositorio.name.substring(repositorio.name.indexOf("/") + 1)}
              </div>
            </div>
            <button onClick={() => onDelete(repositorio)}>Apagar</button>
          </li>
        ))}
      </ul>

      <div className="new">
        <label htmlFor="new-repo">Novo Repo: </label>
        <input
          type="url"
          name="new-repo"
          id="new-repo"
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
        />
        <button onClick={() => onNewRepo(newRepo)}>Adicionar</button>
      </div>
    </div>
  );
};

export default Repositories;
