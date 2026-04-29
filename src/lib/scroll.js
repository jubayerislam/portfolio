export function scrollToSection(id) {
  if (typeof document === 'undefined') {
    return;
  }

  const target = document.getElementById(id);

  if (!target) {
    return;
  }

  target.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
}
