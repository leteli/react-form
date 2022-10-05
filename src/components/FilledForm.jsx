import styles from '../styles/FilledForm.module.css';
import Layout from './Layout.jsx';
import layout from '../styles/Layout.module.css';

const FilledForm = (props) => {
  const { name, surname, birthday, phone, website, personal, techStack, lastProject } = props.state;
  return (
    <Layout>
      <h1 className={layout.title}>{`${name.value} ${surname.value}`}</h1>
      <div>
        <p className={styles.field}><span>Дата рождения:</span>{birthday.value}</p>
        <p className={styles.field}><span>Телефон:</span>{phone.value}</p>
        <p className={styles.field}><span>Сайт:</span>{website.value}</p>
        <p className={styles.field}><span>О себе:</span>{personal.value}</p>
        <p className={styles.field}><span>Стек технологий:</span>{techStack.value}</p>
        <p className={styles.field}><span>Описание последнего проекта:</span>{lastProject.value}</p>
      </div>
    </Layout>
  );
};

export default FilledForm;
