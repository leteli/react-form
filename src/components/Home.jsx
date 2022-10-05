import { Link } from 'react-router-dom';
import Layout from './Layout.jsx';
import layout from '../styles/Layout.module.css';
import button from '../styles/ButtonGroup.module.css';
import styles from '../styles/Home.module.css';

const Home = () => {  
  return (
    <Layout>
      <h1 className={layout.title}>Анкета разработчика</h1>
      <p className={styles.text}>Простое приложение для создания CV</p>
      <div className={styles.btnWrapper}>
        <button className={button.primary}>
          <Link to="/form">Заполнить</Link>
        </button>
      </div>
    </Layout>
  );
};

export default Home;
