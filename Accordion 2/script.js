function toggleAccordion(index) {
  var content = document.querySelectorAll('.accordion-content')[index - 1];
  content.classList.toggle('show');
}
