const cards = document.querySelectorAll('.card');

const onDragStart = (event) => {
    console.log('Dragging the Element');
}

cards.forEach((card) => {
    card.ondragstart = onDragStart;
})