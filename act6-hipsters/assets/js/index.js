// Inicializacion Navegador
document.addEventListener('DOMContentLoaded', function() {
    M.AutoInit();
});

// Inicializacion Parallax
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems);
});

// Inicializacion Material Box
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.materialboxed');
    var instances = M.Materialbox.init(elems);
});