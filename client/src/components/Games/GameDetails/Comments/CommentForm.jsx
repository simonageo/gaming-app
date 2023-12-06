import { useContext, useState } from "react";
import styles from "./CommentForm.module.css";
import { create } from "../../../../services/commentService";
import { useParams } from "react-router-dom";
import AuthContext from "../../../../AuthContext";

export const CommentForm = ({ isOpen, onClose, onCommentSubmit }) => {
  const [commentText, setCommentText] = useState("");
  const { gameId } = useParams();
  const { username } = useContext(AuthContext);

  const commentChange = (e) => {
    setCommentText(e.target.value);
  };

  const commentSubmit = async (e) => {
    e.preventDefault();
    await create(gameId, commentText, username);
    setCommentText("");
    onClose();
    onCommentSubmit();
  };
  return (
    <>
      {isOpen && (
        <div className={styles.modalBackground}>
          <div className={styles.modalContainer}>
            <button className={styles.closeButton} onClick={onClose}>
              &times;
            </button>
            <form onSubmit={commentSubmit}>
              <textarea
                placeholder="Type your comment here..."
                value={commentText}
                onChange={commentChange}
              />
              <button type="submit" className={styles.button}>
                Submit Comment
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
