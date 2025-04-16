import style from "./tags.module.scss";

const Tags = ({ tags }) => {
  return (
    <div className={style.tagsContainer}>
      {tags.map((tag) => (
        <p key={tag} className={style.tag}>
          {tag}
        </p>
      ))}
    </div>
  );
};

export default Tags;
