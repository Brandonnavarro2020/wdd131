// getdates.js
// Es importante que este script se cargue con "defer" para que el DOM ya exista cuando accedamos a los elementos.

(function () {
  // Año actual
  const yearEl = document.getElementById('currentyear');
  if (yearEl) {
    const now = new Date();
    yearEl.textContent = now.getFullYear();
  }

  // Última modificación del documento
  const lastEl = document.getElementById('lastModified');
  if (lastEl) {
    lastEl.textContent = 'Última modificación: ' + document.lastModified;
  }
})();