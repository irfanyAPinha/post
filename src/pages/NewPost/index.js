import { saveNewItem } from "../../db/database";

const NewPostPage = () => {
  const savePost = (post) => {
    saveNewItem({
      id: Math.random(),
      userId: 1,
      title: post.title,
      body: post.body,
    });
    alert("Sucesfully saved");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const title = formData.get("title");
    const body = formData.get("body");

    if (!title) return;

    savePost({ title, body });
  };

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 10,
        maxWidth: 200,
      }}
      onSubmit={onSubmit}
    >
      <label>Title</label>
      <input style={{ marginTop: 2 }} name="title"></input>
      <label>Body</label>
      <input style={{ marginTop: 2 }} name="body"></input>
      <button style={{ marginTop: 2 }} type="submit">
        Submit
      </button>
    </form>
  );
};

export default NewPostPage;
