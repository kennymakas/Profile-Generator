import React, { useEffect, useState } from 'react';
import axios from 'axios';

function RepoList({ username }) {
  const [repos, setRepos] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await axios.get(
          `https://api.github.com/users/${username}/repos?page=${page}&per_page=5`
        );
        setRepos(response.data);
      } catch (error) {
        console.error("Error fetching repos:", error);
      }
    };
    fetchRepos();
  }, [username, page]);

  return (
    <div>
      <h3>Repositories</h3>
      {repos.map(repo => (
        <div key={repo.id}>
          <a href={repo.html_url}>{repo.name}</a>
        </div>
      ))}
      <button onClick={() => setPage(page - 1)} disabled={page === 1}>Previous</button>
      <button onClick={() => setPage(page + 1)}>Next</button>
    </div>
  );
}

export default RepoList;
