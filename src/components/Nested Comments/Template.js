import { commentData } from "../../utilities/commentData";
import { useState } from "react";

const Template = ({ comments, handleAddComments, handleDeleteComment }) => {
  const [showInput, setShowInput] = useState(false);
  const [commentBody, setCommentBody] = useState("");

  const handleAdd = () => {
    let newComment = {
      id: Date.now(),
      text: commentBody,
      replies: [],
    };
    handleAddComments(comments.id, newComment);
    setShowInput(false);
  };

  const handleDelete = () => {
    handleDeleteComment(comments.id);
  };
  return (
    <div>
      <div
        className={`${
          comments.text && "m-4 p-4 bg-gray-300 border-black border-l-4"
        }`}
      >
        <h3 className="font-bold">{comments.text}</h3>
        {showInput && (
          <input
            type="text"
            autoFocus
            onChange={(e) => setCommentBody(e.target.value)}
          />
        )}
        {showInput ? (
          <div>
            <button
              className="m-1 p-1 border-black border-2 rounded-lg"
              onClick={handleAdd}
            >
              Add
            </button>
            <button
              className="m-1 p-1 border-black border-2 rounded-lg"
              onClick={() => setShowInput(false)}
            >
              Cancel
            </button>
          </div>
        ) : comments.text ? (
          <div>
            <button
              className="m-1 p-1 border-black border-2 rounded-lg"
              onClick={() => setShowInput(true)}
            >
              Reply
            </button>
            <button
              className="m-1 p-1 border-black border-2 rounded-lg"
              onClick={handleDelete}
            >
              Delete
            </button>
          </div>
        ) : null}
      </div>
      <div className="ml-6">
        {comments?.replies?.map((ele) => (
          <Template
            key={ele.id}
            comments={ele}
            handleAddComments={handleAddComments}
            handleDeleteComment={handleDeleteComment}
          />
        ))}
      </div>
    </div>
  );
};

export default Template;
