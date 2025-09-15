import image from '../../assets/images/illustration-article.svg';
import avatar from '../../assets/images/image-avatar.png';
import classes from './BlogPreviewCard.module.css';

export function BlogPreviewCard() {
  return (
    <div className={classes.container}>
      <img
        src={image}
        alt="image"
        className={classes.image}
      />

      <div className={classes.textContainer}>
        <div className={classes.badge}>
          <p className="text-preset-3-bold">Learning</p>
        </div>
        <p className="text-preset-3">Published 19 Sep 2025</p>
        <p className="text-preset-1">HTML & CSS foundations</p>
        <p className="text-preset-2">
          These languages are the backbone of every website, defining structure,
          content, and presentation.
        </p>
      </div>

      <div className={classes.author}>
        <img
          src={avatar}
          alt="avatar"
          className={classes.avatar}
        />
        <p className="text-preset-3-bold"> Daniil Marinovich</p>
      </div>
    </div>
  );
}
