// ===== АКТИВНОЕ МЕНЮ =====

// находим все ссылки меню
const navLinks = document.querySelectorAll('.catalog-nav a');

navLinks.forEach(link => {
  link.addEventListener('click', function () {
    // НИЧЕГО не блокируем, только подсветка активного пункта
    navLinks.forEach(l => l.classList.remove('nav-link-active'));
    this.classList.add('nav-link-active');
  });
});

// ===== POPUP-ФИЛЬТРЫ =====

function openPopup(id, triggerElement){
  const popup = document.getElementById(id);
  if (!popup) return;

  const rect = triggerElement.getBoundingClientRect();

  popup.style.left = rect.left + 'px';
  popup.style.top = rect.bottom + window.scrollY + 10 + 'px';
  popup.style.display = 'block';
}

function closePopup(id){
  const popup = document.getElementById(id);
  if (!popup) return;
  popup.style.display = 'none';
}

// навешиваем на селекты с data-popup
document.querySelectorAll('select[data-popup]').forEach(select => {
  select.addEventListener('click', () => {
    const key = select.getAttribute('data-popup');
    if (!key) return;

    // перед открытием все попапы закрываем
    document.querySelectorAll('.filter-popup').forEach(p => p.style.display = 'none');

    if (key === 'genre')   openPopup('popup-genre', select);
    if (key === 'product') openPopup('popup-product', select);
    if (key === 'size')    openPopup('popup-size', select);
  });
});

// закрытие по крестику
document.querySelectorAll('.popup-close').forEach(btn => {
  btn.addEventListener('click', () => {
    const id = btn.getAttribute('data-popup-close');
    if (id) closePopup(id);
  });
});

// закрытие при клике вне попапов и селектов
document.addEventListener('click', (e) => {
  if (!e.target.closest('.filter-popup') && !e.target.closest('select[data-popup]')) {
    document.querySelectorAll('.filter-popup').forEach(p => p.style.display = 'none');
  }
});

// блокируем открытие стандартного меню select
document.querySelectorAll('select[data-popup]').forEach(select => {
  select.addEventListener('mousedown', e => {
    e.preventDefault(); // браузер НЕ откроет нативный дропдаун
  });
});
