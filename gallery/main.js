const filterButtons = document.querySelectorAll('.filter-button');
const galleryItems = document.querySelectorAll('.item');

filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');

        galleryItems.forEach((item) => {
            item.style.display = 'none';

            if (filter === 'all' || item.classList.contains(filter)) {
                item.style.display = 'block';
            }
        });
    });
});
