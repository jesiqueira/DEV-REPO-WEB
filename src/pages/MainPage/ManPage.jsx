import React from "react";

import "./style.css";
import Nav from "./Nav";
import Search from "./Search";
import Repositories from "./Repositories";
import {
  getRepositories,
  createRepository,
  destroyRepository,
} from "../../services/api";
import { Link } from "react-router-dom";

import { AuthContext } from "../../contexts/auth";

// const userId= "654aa73d0801d8fdcd85d835";

const ManPage = () => {
  const { user, logout } = React.useContext(AuthContext);
  // console.log(user.id);
  const [repositories, setRepositories] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [loadingError, setLoadingError] = React.useState(false);

  const loadData = async (query = "") => {
    try {
      setLoading(true);
      const response = await getRepositories(user?.id, query);
      // console.log(response.data);
      setRepositories(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error in loadData:", error);
      setLoadingError(true);
    }
  };

  React.useEffect(() => {
    (async () => {
      try {
        await loadData();
      } catch (error) {
        console.error("Error in loadData:", error);
      }
    })();
  }, []);

  const handleLogout = () => {
    // console.log("Logout");
    logout()
  };
  const handleSearch = (query) => {
    loadData(query);
  };

  const handleDeletar = async (repository) => {
    // console.log("Deletar: ", repository);
    // console.log('user?.id: ', repository.user?.id);
    // console.log('Repositorio Id: ', repository._id);
    await destroyRepository(repository.user?.id, repository._id);
    await loadData();
  };

  const handleNewRepo = async (url) => {
    console.log("newRepo: ", url);
    try {
      await createRepository(user?.id, url);
      await loadData();
    } catch (error) {
      console.error("Response error:", error.response.status);
      console.error(error.response.data);
      setLoadingError(true);
    }
  };

  if (loadingError) {
    return (
      <div className="loading">
        Error ao carregar dados de repositório <Link to={"/login"}></Link>
      </div>
    );
  }

  if (loading) {
    return <div className="loading">Carregando</div>;
  }
  return (
    <div id="main">
      <Nav onLogout={handleLogout} />
      <Search onSearch={handleSearch} />
      <Repositories
        repositories={repositories}
        onDelete={handleDeletar}
        onNewRepo={handleNewRepo}
      />
    </div>
  );
};

export default ManPage;
