// Cargar el contenido del encabezado y footer
fetch('layout.html')
.then(response => response.text())
.then(data => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(data, 'text/html');
    const headerContent = doc.querySelector('header').innerHTML;
    const footerContent = doc.querySelector('footer').innerHTML;

    document.getElementById('header-content').innerHTML = headerContent;
    document.getElementById('footer-content').innerHTML = footerContent;
});