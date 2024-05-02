// - Erstelle eine HTML-Datei mit der Headline “Meine Bucket-List” und einer Liste mit Dingen, die du gerne machen oder erleben möchtest.
// - Gib der Headline und der Liste jeweils eine eindeutige ID.
// - Erstelle im CSS zwei neue Klassen und vergebe dort eine font-family, sowie Textfarbe und Schriftgröße deiner Wahl. Natürlich darfst du auch gerne mehr Stylings verwenden.
// - Du wirst eine Klasse für die Headline und eine Klasse für die Liste nutzen. Überleg dir also passende Namen und Stylings für die Klassen. Weise nun mit JavaScript der Headline und der Liste die jeweiligen Klassen zu.
function addClass() {
  // Styling ändern für H1
  const addClassH1 = document.querySelector(".headline");

  addClassH1.classList.add("headline-style");

  // Styling ändern für Liste
  const addClassList = document.querySelector(".list");

  addClassList.classList.add("list-style");
}
