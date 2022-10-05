import { Link } from 'react-router-dom';
import Layout from './Layout.jsx';

const Home = () => {  
  return (
    <Layout>
      <h1>Анкета для разработчиков</h1>
      <div>
        <Link to="/form">Заполнить</Link>
        <Link to="/info">Моя анкета</Link>
      </div>
    </Layout>
  );
};

export default Home;
