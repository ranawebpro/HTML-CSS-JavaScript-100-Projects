function toggleAccordion(index) {
    var item = document.querySelectorAll('.accordion-item')[index - 1];
    item.classList.toggle('active');
    var content = item.querySelector('.accordion-content');
    content.classList.toggle('show');
}
