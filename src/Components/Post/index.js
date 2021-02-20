import { Avatar } from "@material-ui/core";
import "./style.css";

export const Post = ({ username, caption, imageUrl }) => {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar className="post__avatar" alt="" src="" />
        <h3>{username}</h3>
      </div>

      <img className="post__image" alt="" src={imageUrl} />
      <h4 className="post__text">
        <strong>{username}:</strong> {caption}
      </h4>
    </div>
  );
};
