
document.addEventListener('visibilitychange', function () {
    var b = document.getElementById('vintageAudio')
    if (document.hidden) {
        alert("Você mudou de aba, paramos a música para não te atrapalhar");
        b.pause();
    }
});