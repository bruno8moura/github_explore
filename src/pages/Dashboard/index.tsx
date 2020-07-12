import React, { useState, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Title, Form, Repositories } from './styles';
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
  const [repositories, setRepositories] = useState<Repository[]>([]);

  async function handleAddRepository(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    if (!searchedRepo) return;
    const response = await api.get<Repository>(`repos/${searchedRepo.trim()}`);
    const repository: Repository = response.data;
    setRepositories([...repositories, repository]);
    setSearchedRepo('');
  }

  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form onSubmit={handleAddRepository}>
        <input placeholder="Digite o nome do reposositório" value={searchedRepo} onChange={(e) => setSearchedRepo(e.target.value)} />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        {repositories.map((repository) => (
          <a href="test">
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
          </a>
        ))}

      </Repositories>

    </>
  );
};

export default Dashboard;
