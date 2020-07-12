import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Title, Form, Repositories } from './styles';

import logoImg from '../../assets/logo.svg';

const Dashboard: React.FC = () => (
  <>
    <img src={logoImg} alt="Github Explorer" />
    <Title>Explore repositórios no Github</Title>

    <Form>
      <input placeholder="Digite o nome do reposositório" />
      <button type="submit">Pesquisar</button>
    </Form>

    <Repositories>
      <a href="test">
        <span>
          <img
            src="https://avatars3.githubusercontent.com/u/3678986?s=400&u=acb3a9debae346b3a0bdcce82d997e9e302e9ab0&v=4"
            alt="Bruno Moura"
          />
          <div>
            <strong>bruno8moura/binary-to-decimal</strong>
            <p>A NodeJS Application that converts a binary number into a decimal one.</p>
          </div>
        </span>
        <FiChevronRight size={20} className="arrow" />
      </a>
      <a href="test">
        <span>
          <img
            src="https://avatars3.githubusercontent.com/u/3678986?s=400&u=acb3a9debae346b3a0bdcce82d997e9e302e9ab0&v=4"
            alt="Bruno Moura"
          />
          <div>
            <strong>bruno8moura/binary-to-decimal</strong>
            <p>A NodeJS Application that converts a binary number into a decimal one.</p>
          </div>
        </span>
        <FiChevronRight size={20} className="arrow" />
      </a>
      <a href="test">
        <span>
          <img
            src="https://avatars3.githubusercontent.com/u/3678986?s=400&u=acb3a9debae346b3a0bdcce82d997e9e302e9ab0&v=4"
            alt="Bruno Moura"
          />
          <div>
            <strong>bruno8moura/binary-to-decimal</strong>
            <p>A NodeJS Application that converts a binary number into a decimal one.</p>
          </div>
        </span>
        <FiChevronRight size={20} className="arrow" />
      </a>
    </Repositories>

  </>
);

export default Dashboard;
