$(document).ready(function() {
    var envelope = $('#envelope');
    var btn_open = $("#open");
    var musica = document.getElementById('minhaMusica');

    btn_open.click(function() {
        musica.play();
        open();
    });

    function open() {
        envelope.addClass("open").removeClass("close");
        
        setTimeout(function() {
            // Salva o tempo atual da música antes de redirecionar
            sessionStorage.setItem('musicCurrentTime', musica.currentTime);
            window.location.href = 'index.html';
        }, 2500);
    }
});