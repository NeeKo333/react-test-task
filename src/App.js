import { useState } from "react";
import "./App.css";
import InputForm from "./components/InputForm";
import PostsList from "./components/PostsList";
import SelectSort from "./components/SelectSort";
import SearchInput from "./components/SearchInput";
import ModalWindow from "./components/ModalWindow";
function App() {
  const [posts, setPosts] = useState([]);
  const [sortOption, setSortOption] = useState("");
  const [searchQuery, setSearchQuery] = useState(posts);
  const [popup, setPopup] = useState(false);

  function addNewPost(e, inputText) {
    e.preventDefault();
    const obj = {
      id: Math.floor(Math.random() * 10000),
      text: inputText,
    };
    setPosts([...posts, obj]);
  }

  function deletePost(id) {
    const newArr = [...posts].filter((post) => post.id !== id);
    setPosts(newArr);
  }

  function sortingValue(value) {
    console.log("work");
    const newArr = [...posts].sort((a, b) => (a[value] > b[value] ? 1 : -1));
    setPosts(newArr);
    setSortOption(value);
  }

  function search(searchQuery) {
    if (searchQuery)
      return [...posts].filter((post) => post.text.includes(searchQuery));
    else return posts;
  }

  function updatePost(id, newValue) {
    const updatetedPost = [...posts].find((post) => post.id === id);
    updatetedPost.text = newValue;
    setPosts([...posts]);
  }

  const searchedPosts = search(searchQuery);
  return (
    <div className="App">
      {popup && (
        <ModalWindow
          closePopup={() => setPopup(false)}
          content={<InputForm addNewPost={addNewPost}></InputForm>}
        ></ModalWindow>
      )}
      <button onClick={() => setPopup(true)}>Add</button>
      <SelectSort setSorting={sortingValue}></SelectSort>
      <SearchInput setSearchQuery={setSearchQuery}></SearchInput>
      <PostsList
        array={searchedPosts}
        deletePost={deletePost}
        updatePost={updatePost}
      ></PostsList>
    </div>
  );
}

export default App;
