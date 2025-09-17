interface NavItem {
  name: string;
  path: string;
}

const navItems: NavItem[] = [
  { name: 'Hjem', path: '/' },
  { name: 'Om', path: '/om' },
  { name: 'Kontakt', path: '/kontakt' },
];

function setupNavbar(): void {
  const navList = document.querySelector('.nav-list') as HTMLUListElement;
  const toggleButton = document.querySelector('.nav-toggle') as HTMLButtonElement;
  let isOpen: boolean = false;

  navList.innerHTML = navItems
    .map(
      (item) =>
        `<li><a href="${item.path}" class="nav-link ${
          window.location.pathname === item.path ? 'active' : ''
        }">${item.name}</a></li>`
    )
    .join('');

  function toggleMenu(): void {
    isOpen = !isOpen;
    navList.classList.toggle('hidden', !isOpen);
    toggleButton.textContent = isOpen ? '✕' : '☰';
  }

  toggleButton.addEventListener('click', toggleMenu);
  navList.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', () => {
      if (isOpen) toggleMenu();
    });
  });
}
document.addEventListener('DOMContentLoaded', setupNavbar);