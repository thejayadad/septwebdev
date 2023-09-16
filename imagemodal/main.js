
const galleryItems = document.querySelectorAll('.gallery-item')
const modal = document.getElementById('modal')
const modalImage = document.getElementById('modal-image')
const closeModalButton = document.getElementById('close-modal')
galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        openModal(index)
    })
})
function openModal(index){
    modalImage.src = galleryItems[index].querySelector('img').src;
    modal.style.display = 'block'
}
closeModalButton.addEventListener('click', () => {
    modal.style.display = 'none'
})
window.addEventListener('click', (event) => {

    if(event.target === modal){
        modal.style.display = 'none';
    }
})