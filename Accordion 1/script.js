function toggleAccordion(index) {
  var content = document.querySelectorAll('.accordion-content')[index - 1];
  content.style.display = (content.style.display === 'block') ? 'none' : 'block';
}
