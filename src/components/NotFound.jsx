import Layout from './Layout.jsx';
import ReturnButton from './ReturnButton.jsx';
import layout from '../styles/Layout.module.css';

const NotFound = () => {
  return (
    <Layout>
      <div className={layout.contentHeader}>
        <ReturnButton />
        <h1 className={layout.title}>Страница не найдена</h1>
      </div>
    </Layout>
  )
};

export default NotFound;
