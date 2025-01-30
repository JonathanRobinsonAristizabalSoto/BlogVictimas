document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('language-selector').addEventListener('change', function() {
        var selectedLanguage = this.value;
        var titleText = document.getElementById('title').innerText;
        var contentText = document.getElementById('content').innerText;

        // Establecer el idioma de origen
        var sourceLang = selectedLanguage === "en" ? "es" : "en";

        // Traducir tItulo y contenido
        translateText(titleText, sourceLang, selectedLanguage, 'title');
        translateText(contentText, sourceLang, selectedLanguage, 'content');
    });

    function translateText(text, sourceLang, targetLang, type) {
        if (!text) {
            console.error("No hay texto para traducir.");
            return;
        }

        console.log('Texto a traducir:', text);

        fetch(`https://translate.yandex.net/api/v1.5/tr.json/translate?key=YOUR_API_KEY&text=${encodeURIComponent(text)}&lang=${sourceLang}-${targetLang}`)
        .then(response => response.json())
        .then(data => {
            if (data.code === 200) {
                if (type === 'title') {
                    document.getElementById('title').innerText = data.text[0];
                } else if (type === 'content') {
                    document.getElementById('content').innerText = data.text[0];
                }
            } else {
                console.error("Error en la respuesta de la API:", data);
            }
        })
        .catch(error => {
            alert("Error al traducir el texto. Inténtalo de nuevo más tarde.");
            console.error('Error:', error);
        });
    }
});
