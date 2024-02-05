// - Erstelle eine Funktion, die ein bestimmtes Wort, überall wo es vorkommt, in einem Artikel hervorhebt.
// - Nutze dafür den vorgebenen Code.

// - Dazu kannst du die replaceAll-Methode des String-Objekts verwenden.
// - Mit der innerText-Eigenschaft des Elements kannst du nur den Text des Artikels erhalten und mit der innerHTML-Eigenschaft kannst du den HTML-Inhalt des Artikels festlegen.
// - Du kannst ein span-Element verwenden, um die Wörter hervorzuheben.

function highlight() {
  const searchInput = document.querySelector("#search-input").value;
  const articleText = document.querySelector("article").innerText;
  const error = document.querySelector(".error");

  // wenn mindestens ein Zeichen im Input-Feld steht:
  if (searchInput.length > 0) {
    error.innerHTML = "";

    // und wenn der User-Input im Article-Text enthalten ist:
    if (articleText.indexOf(searchInput) > 0) {
      error.innerHtml = "";

      // sollen sämtliche Fundstellen von searchInput im articleText die Klasse highlight erhalten - dazu wähle ich das HTML des article-Elements an und ersetze so im Article-Text alle Suchergebnisse mit dem von einem span-Element inkl neuer Klasse umgebenen Suchergebnis:
      document.querySelector("article").innerHTML = articleText.replaceAll(
        searchInput,
        `<span class="highlight">${searchInput}</span>`
      );
    } else {
      error.innerHTML = "Bitte gib ein Wort ein, das im Text enthalten ist";
    }
  } else {
    error.innerHTML = "Bitte gib etwas ein.";
  }
}
