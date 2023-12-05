import styles from './CommentForm.module.css';

export const CommentForm = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div className={styles.modalBackground}>
          <div className={styles.modalContainer}>
            <button className={styles.closeButton} onClick={onClose}>
              &times;
            </button>
            <form >
              <textarea
                placeholder="Type your comment here..."
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