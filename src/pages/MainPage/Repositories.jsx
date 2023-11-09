import React from "react";

const Repositories = ({ repositories, onDelete, onNewRepo }) => {
  const [newRepo, setNewRepo] = React.useState();
  return (
    <div className="repositories">
      <h2 className="title">Repositórios</h2>
      <ul className="list">
        <li className="item">
          <div className="info">
            <div className="owner">facebook</div>
            <div className="name">react</div>
          </div>
          <button onClick={onDelete}>Apagar</button>
        </li>
      </ul>

      <div className="new">
        <label htmlFor="new-repo">Novo Repo: </label>
        <input type="url" name="new-repo" id="new-repo" />
        <button>Adicionar</button>
      </div>
    </div>
  );
};

export default Repositories;
