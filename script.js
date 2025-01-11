// Admin password (set by the owner)
const ADMIN_PASSWORD = "12345";

// Array to store blog posts
let blogPosts = [];

// Function to render posts dynamically
function renderPosts() {
  const postsContainer = document.getElementById("posts");
  postsContainer.innerHTML = ""; // Clear existing posts

  blogPosts.forEach((post) => {
    const postElement = document.createElement("div");
    postElement.className = "post";

    postElement.innerHTML = `
      <h2>${post.title}</h2>
      <p>${post.content}</p>
    `;

    postsContainer.appendChild(postElement);
  });
}

// Handle admin login
document.getElementById("login-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const enteredPassword = document.getElementById("admin-password").value;

  if (enteredPassword === ADMIN_PASSWORD) {
    document.getElementById("admin-login").style.display = "none"; // Hide login section
    document.getElementById("add-post").style.display = "block"; // Show "Add Blog" section
  } else {
    document.getElementById("login-error").style.display = "block"; // Show error message
  }
});

// Handle adding a new blog post
document.getElementById("post-form").addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;

  blogPosts.push({ title, content }); // Add post to the array

  document.getElementById("post-form").reset(); // Clear the form
  renderPosts(); // Re-render posts
});

// Initial render
renderPosts();
