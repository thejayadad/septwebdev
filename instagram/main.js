
let isLiked = false;
let likeCount = 0;

function toggleLike() {
    const likeButton = document.querySelector('.like-button');
    const likeCountElement = document.querySelector('.like-count');

    if (isLiked) {
        likeButton.style.transform = 'scale(1)';
        likeCountElement.textContent = (--likeCount).toString();
        isLiked = false;
    } else {
        likeButton.style.transform = 'scale(1.2)';
        likeCountElement.textContent = (++likeCount).toString();
        isLiked = true;
    }
}