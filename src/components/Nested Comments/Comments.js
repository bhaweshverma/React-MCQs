import { commentData } from "../../utilities/commentData";
import Template from "./Template";
import { useState } from "react";
import useFunctions from "../../utilities/useFunctions";

const Comments = () => {
  const [comments, setComments] = useState(commentData);
  const { addComment, deleteComment } = useFunctions();
  //console.log(comments);
  const handleAddComments = (commentId, newComment) => {
    let newTree = addComment(comments, commentId, newComment);
    //console.log(newTree);
    setComments(newTree);
  };

  const handleDeleteComment = (commentId) => {
    let newTree = deleteComment(comments, commentId);
    //console.log(commentId);
    setComments(newTree);
  };
  return (
    <div>
      <Template
        key={comments.id}
        comments={comments}
        handleAddComments={handleAddComments}
        handleDeleteComment={handleDeleteComment}
      />
    </div>
  );
};

export default Comments;
