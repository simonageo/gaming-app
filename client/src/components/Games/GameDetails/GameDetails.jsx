import { Link, useNavigate, useParams } from "react-router-dom";
import { getOne } from "../../../services/gameService.js";
import { useContext, useEffect, useState } from "react";
import styles from "./GameDetails.module.css";
import AuthContext from "../../../AuthContext";
import { del } from "../../../services/gameService";
import { CommentForm } from "./Comments/CommentForm";
import { getAllComments } from "../../../services/commentService.js";

export default function GameDetails() {
  const navigate = useNavigate();
  const { gameId } = useParams();
  const [game, setGame] = useState({});
  const [comments, setComments] = useState([]);
  const [isCommentFormOpen, setCommentFormOpen] = useState(false);

  const openCommentForm = () => {
    setCommentFormOpen(true);
  };

  const closeCommentForm = () => {
    setCommentFormOpen(false);
  };

  const commentSubmitHandler = async () => {
    try {
      const updatedComments = await getAllComments(gameId);
      setComments(updatedComments);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const gameDetails = await getOne(gameId);
        setGame(gameDetails);

        const commentsData = await getAllComments(gameId);
        setComments(commentsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [gameId]);

  const { userId, isAuthenticated } = useContext(AuthContext);

  const deleteHandler = async () => {
    try {
      await del(gameId);
      navigate("/games");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="page-heading header-text">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3>Contact Us</h3>
              <span className="breadcrumb">
                <Link to="/">Home</Link> &gt; {game.title}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-page section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="left-text">
                <img src={game.imageUrl} />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="right-content">
                <div className="row">
                  <div className="col-lg-12">
                    <h1>{game.title}</h1>
                    <p>
                      <span className={styles.boldText}>Category: </span>{" "}
                      {game.category}
                    </p>
                    <p>
                      <span className={styles.boldText}>Difficulty </span>{" "}
                      Level: {game.difficultyLevel}
                    </p>
                    <p>
                      <span className={styles.boldText}>Description: </span>{" "}
                      {game.description}
                    </p>
                  </div>
                  {userId === game._ownerId && (
                    <div className="col-lg-12">
                      <div className="col-lg-12">
                        <fieldset>
                          <Link
                            to={`/games/${gameId}/edit`}
                            id="edit"
                            className={styles.button}
                          >
                            Edit
                          </Link>
                          <button
                            id="delete"
                            className={styles.button}
                            onClick={deleteHandler}
                          >
                            Delete
                          </button>
                        </fieldset>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h3>Comments</h3>
              {/* Display all comments here */}
              <ul>
                {comments.length === 0 ? (
                  <p>No comments.</p>
                ) : (
                  comments.map((comment) => (
                    <li key={comment._id}>{comment.email}: {comment.text}</li>
                  ))
                )}
              </ul>
              {isAuthenticated && (
                <>
                  <button className={styles.button} onClick={openCommentForm}>
                    Add Comment
                  </button>
                  <CommentForm
                    isOpen={isCommentFormOpen}
                    onClose={closeCommentForm}
                    onCommentSubmit={commentSubmitHandler}
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
