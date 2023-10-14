import { useEffect, useState } from "react";
export const useRepos = () => {

  const [reposArray, setReposArray] = useState();
  const [apiStatus, setApiStatus] = useState("Pending");
  useEffect(() => {
    setTimeout(() => {
      getRepos();
    }, 1000)


  }, []);
  const getRepos = async () => {
    try {
      const response = await fetch("https://api.github.com/users/PaweLeszczynsky/repos");
      if (!response.ok) {
        setApiStatus("Error");
        throw new Error(response.statusText);
      }
      const repos = await response.json();
      setReposArray(repos);
      setApiStatus("Success");

    }
    catch { setApiStatus("Error") }
  };
  return { reposArray, apiStatus }
};





