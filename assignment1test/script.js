const blogPosts = [
  {
    id: 1,
    title: "Understanding JavaScript Closures",
    author: "John Doe",
    content: "lorem ipsum",
    date: "2024-08-01",
    tags: ["JavaScript", "Programming", "Web Development"],
  },
  {
    id: 2,
    title: "This is a test",
    author: "Brandon Sun",
    content: "bro",
    date: "2024-09-10",
    tags: ["JaveScript", "programming", "Web Development"],
  },
  {
    id: 3,
    title: "This is a test",
    author: "Brandon Sun",
    content: "bro",
    date: "2024-09-10",
    tags: ["JaveScript", "programming", "Web Development"],
  },
  {
    id: 4,
    title: "This is a test",
    author: "Brandon Sun",
    content: "bro",
    date: "2024-09-10",
    tags: ["JaveScript", "programming", "Web Development"],
  },
  {
    id: 5,
    title: "This is a test",
    author: "Brandon Sun",
    content: "bro",
    date: "2024-09-10",
    tags: ["JaveScript", "programming", "Web Development"],
  },
  {
    id: 6,
    title: "This is a test",
    author: "Brandon Sun",
    content: "bro",
    date: "2024-09-10",
    tags: ["JaveScript", "programming", "Web Development"],
  },
  {
    id: 7,
    title: "This is a test",
    author: "Brandon Sun",
    content: "bro",
    date: "2024-09-10",
    tags: ["JaveScript", "programming", "Web Development"],
  },
];
const container = document.querySelector("#grid-container");
console.log(container);
let postContent = "";
for (let i = 0; i < blogPosts.length; i++) {
  postContent += `<section id="box${i + 1}">
<h1> ${blogPosts[i].title}</h1>
<p>${blogPosts[i].content}</p></section>`;
}
console.log(postContent);
container.innerHTML = postContent;
