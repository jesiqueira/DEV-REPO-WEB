import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:5000",
});

export const getRepositories = async (userId, query) => {
  try {
    let url = `/users/${userId}/repositories`;

    if (query !== "") {
      url += `?q=${query}`;
    }
    // console.log("Query: ", url);
    // http://localhost:5000/users/IDUSER/repositories/?q=XXXX
    // const response = await api.get(url);
    // console.log('Data: ', response.data);
    // return response.data;
    return api.get(url);
  } catch (error) {
    if (error.response) {
      console.error("Response error:", error.response.status);
      console.error(error.response.data);
    } else if (error.request) {
      console.error("Request error:", error.request);
    } else {
      console.error("Error:", error.message);
    }
    console.error(error.config);
    throw error; // rethrow the error to propagate it
  }
};

export const createRepository = async (userId, repositoryUrl) => {
  try {
    const repositoryName = getRepositoryName(repositoryUrl);
    const url = `/users/${userId}/repositories`;
    return api.post(url, { name: repositoryName, url: repositoryUrl });
  } catch (error) {
    console.error("Response error:", error.response.status);
    console.error(error.response.data);
  }
};

export const destroyRepository = async (userId, id) => {
  const url = `/users/${userId}/repositories/${id}`;
  return api.delete(url);
};

const getRepositoryName = (url) => {
  // https://ihateregex.io/expr/url/
  const regex =
    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\\+.~#?&\\/\\/=]*)/;

  const match = url.match(regex);
  //   console.log("match: ", match);

  if (match[2]) {
    const values = match[2].split("/");
    console.log("values: ", values);
    return `${values[1]} / ${values[2]}`;
  }
};

export const createSession = async (email, password) => {
  return api.post("/sessions", { email, password });
};
