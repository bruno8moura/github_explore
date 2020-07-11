import React from 'react';
import { Title, Form } from './styles';

import logoImg from '../../assets/logo.svg';

const Dashboard: React.FC = () => (
  <>
    <img src={logoImg} alt="Github Explorer" />
    <Title>Explore repositórios no Github</Title>

  </>
);

export default Dashboard;
