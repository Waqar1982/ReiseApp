function setupNavbar(): void {
  const navList = document.querySelector('.nav-list') as HTMLUListElement;
  const toggleButton = document.querySelector('.nav-toggle') as HTMLButtonElement;
  let isOpen: boolean = false;

  navList.innerHTML = navItems
  .map((item, index) => {
    const isActive = window.location.pathname === item.path;
    const hasSubItems = item.subItems && item.subItems.length > 0;
    const subMenuHtml = hasSubItems
      ? `<ul class="dropdown hidden" id="dropdown-${index}">${item.subItems!.map(
          (subItem) =>
            `<li><a href="${subItem.path}" class="nav-link ${
              window.location.pathname === subItem.path ? 'active' : ''
            }">${subItem.name}</a></li>`
        ).join('')}</ul>`
      : '';
    return `<li><a href="${item.path}" class="nav-link ${isActive ? 'active' : ''} ${
      hasSubItems ? 'dropdown-toggle' : ''
    }" ${hasSubItems ? `data-dropdown="dropdown-${index}"` : ''}>${item.name}</a>${subMenuHtml}</li>`;
  })
  .join('');

  function toggleMenu(): void {
  isOpen = !isOpen;
  navList.classList.toggle('hidden', !isOpen);
  toggleButton.textContent = isOpen ? '✕' : '☰';
  document.querySelectorAll('.dropdown').forEach((dropdown) => dropdown.classList.add('hidden'));
}

toggleButton.addEventListener('click', toggleMenu);

navList.querySelectorAll('.dropdown-toggle').forEach((toggle) => {
  toggle.addEventListener('click', (e) => {
    e.preventDefault();
    const dropdownId = toggle.getAttribute('data-dropdown');
    if (dropdownId) {
      const dropdown = document.getElementById(dropdownId) as HTMLUListElement | null;
      if (dropdown) {
        dropdown.classList.toggle('hidden');
        document.querySelectorAll('.dropdown').forEach((d) => {
          if (d !== dropdown) d.classList.add('hidden');
        });
      }
    }
  });
});

navList.querySelectorAll('.nav-link:not(.dropdown-toggle)').forEach((link) => {
  link.addEventListener('click', () => {
    if (isOpen) toggleMenu();
  });
});
}
document.addEventListener('DOMContentLoaded', setupNavbar);