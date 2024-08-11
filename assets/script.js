let blogItems = document.getElementById("blogItems");

function saveBlogInStorage() {
  let personalBlogs = [];
  let blogsFromStorage = localStorage.getItem("personalBlogs");
  if (blogsFromStorage !== null) {
    personalBlogs = JSON.parse(blogsFromStorage);
  }
  console.log(personalBlogs);
  console.log(typeof (personalBlogs));
  const newBlog = {};
  if (document.getElementById("author").value != "" && document.getElementById("title").value != "" && document.getElementById("blogContent").value != "") {
    newBlog.author = document.getElementById("author").value;
    newBlog.title = document.getElementById("title").value;
    newBlog.blogContent = document.getElementById("blogContent").value;
    personalBlogs.push(newBlog);
    console.log(personalBlogs);
    // set content to local storage
    localStorage.setItem("personalBlogs", JSON.stringify(personalBlogs));
  } else {
    alert("Please fill all of the fields!");
  }
  // redirect
  document.location.href = "blog.html";
}

function showContent() {
  let personalBlogs = [];
  let blogsFromStorage = localStorage.getItem("personalBlogs");
  personalBlogs = JSON.parse(blogsFromStorage);
  if (personalBlogs !== null) {
    for (let i = 0; i < personalBlogs.length; i++) {
      const newBlog = `<div class="newBlog"><h3>${personalBlogs[i].title}</h3><p>${personalBlogs[i].blogContent}</p><h6>- ${personalBlogs[i].author}</h6></div>`;
      blogItems.innerHTML += newBlog;
    }
  }
}

showContent();
