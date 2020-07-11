import React from 'react';
import { Title, Form } from './styles';

import logoImg from '../../assets/logo.svg';

const Dashboard: React.FC = () => (
  <>
    <img src={logoImg} alt="Github Explorer" />
    <Title>Explore repositórios no Github</Title>

    <Form>
      <input placeholder="Digite o nome do reposositório" />
      <button type="submit">Pesquisar</button>
    </Form>

  </>
);

export default Dashboard;
