const saveNewItem = (item) => {
  const currentItems = localStorage.getItem("items");
  const currentComments = localStorage.getItem("comments");

  const parsedItem = currentItems ? JSON.parse(currentItems) : [];
  const parsedComment = currentComments ? JSON.parse(currentComments).data : [];
  const commentsData = { postId: item.id, comments: [] };
  localStorage.setItem("items", JSON.stringify([...parsedItem, item]));
  localStorage.setItem(
    "comments",
    JSON.stringify({ data: [...parsedComment, commentsData] })
  );
};

export { saveNewItem };
