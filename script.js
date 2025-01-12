// Get form and comment section elements
const form = document.getElementById('comment-form');
const commentSection = document.getElementById('comment-section');

// Initialize comments array
let comments = [];

// Load existing comments
window.onload = loadComments;

// Form submission handler
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const comment = document.getElementById('comment').value;
    addComment(name, comment);
    form.reset();
});

// Add comment function
function addComment(name, comment) {
    const commentObj = { name, comment };
    comments.push(commentObj);
    displayComments();
    saveComments();
}

// Display comments function
function displayComments() {
    commentSection.innerHTML = '';
    comments.forEach((comment, index) => {
        const commentHTML = `
            <div class="comment">
                <strong class="name">${comment.name}</strong>
                <p class="comment-text">${comment.comment}</p>
            </div>
        `;
        commentSection.insertAdjacentHTML('beforeend', commentHTML);
    });
}

// Save comments function (local storage)
function saveComments() {
    localStorage.setItem('comments', JSON.stringify(comments));
}

// Load existing comments function (local storage)
function loadComments() {
    const storedComments = localStorage.getItem('comments');
    if (storedComments) {
        comments = JSON.parse(storedComments);
        displayComments();
    }
}