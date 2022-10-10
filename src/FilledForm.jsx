import styles from './styles/FilledForm.module.css';

const FilledForm = (props) => {
  console.log(props.state);
  const { name, surname, birthday, phone, website, personal, techStack, lastProject } = props.state;
  return (
    <div className={props.className}>
      <h1 className={styles.title}>{`${name.value} ${surname.value}`}</h1>
      <div>
        <p className={styles.field}><span>Дата рождения:</span>{birthday.value}</p>
        <p className={styles.field}><span>Телефон:</span>{phone.value}</p>
        <p className={styles.field}><span>Сайт:</span>{website.value}</p>
        <p className={styles.field}><span>О себе:</span>{personal.value}</p>
        <p className={styles.field}><span>Стек технологий:</span>{techStack.value}</p>
        <p className={styles.field}><span>Описание последнего проекта:</span>{lastProject.value}</p>
      </div>
    </div>
  );
};

export default FilledForm;
