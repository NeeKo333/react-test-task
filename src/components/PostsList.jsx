import React from "react";
import { useState } from "react";
import SinglePost from "./SinglePost";
import ModalWindow from "./ModalWindow";
const PostsList = ({ array, deletePost, updatePost }) => {
  const [popupTwo, setPopupTwo] = useState(false);
  const [changeInputValue, setChangeInputValue] = useState("");
  const [currentPostId, setCurrentPostId] = useState();
  function updateInput() {
    return (
      <form>
        <input
          onChange={(e) => setChangeInputValue(e.target.value)}
          type="text"
          placeholder="change"
          value={changeInputValue}
        ></input>
        <button
          onClick={(e) => {
            e.preventDefault();
            updatePost(currentPostId, changeInputValue);
            setChangeInputValue("");
          }}
        >
          Change!
        </button>
      </form>
    );
  }

  return (
    <div
      onDoubleClick={(e) => {
        if (e.target.tagName === "H2") deletePost(+e.target.id);
      }}
      onClick={(e) => {
        if (e.target.tagName === "H2") {
          setPopupTwo(true);
          setCurrentPostId(+e.target.id);
        }
      }}
    >
      {popupTwo && (
        <ModalWindow
          content={updateInput()}
          closePopup={() => setPopupTwo(false)}
        ></ModalWindow>
      )}
      {array.length > 0 ? (
        array.map((post) => (
          <SinglePost id={post.id} key={post.id} text={post.text}></SinglePost>
        ))
      ) : (
        <h2>No posts!</h2>
      )}
    </div>
  );
};

export default PostsList;
