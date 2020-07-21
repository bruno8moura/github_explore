import React, { useState, useEffect, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';
import {
  Title, Form, Repositories, Error,
} from './styles';
import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

interface Repository {

    full_name: string;
    owner: {
        login: string;
        avatar_url: string;
    },
    description: string;
}

const Dashboard: React.FC = () => {
  const [searchedRepo, setSearchedRepo] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storagedRepositories = localStorage.getItem('@GithubExplorer:repositories');
    if (storagedRepositories) {
      return JSON.parse(storagedRepositories);
    }

    return [];
  });
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    localStorage.setItem(
      '@GithubExplorer:repositories',
      JSON.stringify(repositories),
    );
  }, [repositories]);

  async function handleAddRepository(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    if (!searchedRepo) {
      setErrorMessage('Informar um repositório válido');
      return;
    }

    try {
      const response = await api.get<Repository>(`repos/${searchedRepo.trim()}`);
      const repository: Repository = response.data;
      setRepositories([...repositories, repository]);
      setSearchedRepo('');
      setErrorMessage('');
    } catch (error) {
      console.log(error);
      setErrorMessage('Repositório não encontrado.');
    }
  }

  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form hasError={!!errorMessage} onSubmit={handleAddRepository}>
        <input
          placeholder="Digite o nome do reposositório"
          value={searchedRepo}
          onChange={(e) => setSearchedRepo(e.target.value)}
        />
        <button type="submit">Pesquisar</button>
      </Form>

      { errorMessage && <Error>{errorMessage}</Error>}

      <Repositories>
        {repositories.map((repository) => (
          <Link to={`/repository/${repository.full_name}`} key={repository.full_name}>
            <span>
              <img
                src={repository.owner.avatar_url}
                alt={repository.full_name}
              />
              <div>
                <strong>
                  {repository.full_name}
                </strong>
                <p>
                  {repository.description}
                </p>
              </div>
            </span>
            <FiChevronRight size={20} className="arrow" />
          </Link>
        ))}

      </Repositories>

    </>
  );
};

export default Dashboard;
