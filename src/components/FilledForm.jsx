import Layout from './Layout.jsx';
import ReturnButton from './ReturnButton.jsx';
import formStyles from '../styles/Form.module.css';
import styles from '../styles/FilledForm.module.css';
import layout from '../styles/Layout.module.css';

const FilledForm = (props) => {
  const { name, surname, birthday, phone, website, personal, techStack, lastProject } = props.state;
  return (
    <Layout>
      <div className={formStyles.contentHeader}>
        <ReturnButton />
        { name.value !== ''
        ? <h1 className={layout.title}>{`${name.value} ${surname.value}`}</h1>
        : <h1 className={layout.title}>Анкета не заполнена</h1>
        }
      </div>
      { name.value !== '' && (
        <div>
          <p className={styles.field}><span>Дата рождения:</span>{birthday.value}</p>
          <p className={styles.field}><span>Телефон:</span>{phone.value}</p>
          <p className={styles.field}><span>Сайт:</span>{website.value}</p>
          <p className={styles.field}><span>О себе:</span>{personal.value}</p>
          <p className={styles.field}><span>Стек технологий:</span>{techStack.value}</p>
          <p className={styles.field}><span>Описание последнего проекта:</span>{lastProject.value}</p>
        </div>
      )}
    </Layout>
  );
};

export default FilledForm;
