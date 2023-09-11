
const items = {
    fruits: ['Apple', 'Banana', 'Orange', 'Grapes'],
    vegatables: ['Carrot', 'Broccoli', 'Tomato', 'Cucumber']
}
function populateSecondSelect(){
    const firstSelect = document.querySelector('#firstSelect')
    const secondSelect = document.querySelector('#secondSelect')
    const  selectedCategory = firstSelect.value;
    secondSelect.innerHTML = '';
    items[selectedCategory].forEach(item => {
        const option =  document.createElement('option');
        option.value = item;
        option.textContent = item;
        secondSelect.appendChild(option)
    })
}
populateSecondSelect()
document.querySelector('#firstSelect').addEventListener('change', populateSecondSelect)