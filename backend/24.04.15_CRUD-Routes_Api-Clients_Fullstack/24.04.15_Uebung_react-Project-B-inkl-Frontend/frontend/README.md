# ToDo App

## Features to implement:

<ul>
<li>Abhakmögllichkeit für erledigte Todos
    <ul>
        <li>state done: true</li>
        <li>Equivalent ist im json done: true</li>
        <li>onClick auf Checkbox ändert state</li>
        <li>wenn true, Checkbox angeklickt und Todo durchgestrichen, evtl. grün</li>
    </ul>
</li>
<li>erledigte Todos in extra Section am Ende schieben?</li>
<li>Priorisierungsmöglichkeit hinzufügen (Stern?)
    <ul>
        <li>priority: true</li>
        <li>fill = {priority ? "yellow" : "none"}</li>
        <li>stroke = {priority ? "none" : "yellow"}</li>
        <li>sort priority => filter nach priority = true?</li>
        <li>priority Todos oben anzeigen, if (priority === true) {index = 0}?</li>
    </ul>
</li>
<li>Sortierfunktion für Todos (Due Date, Prio, Person)
     <ul>
        <li>über Options?</li>
        <li>besser: icons?</li>
        <li>oder: Pfeile über den jeweiligen areas? onclick löst jeweilige sortierfunktion aus?</li>
    </ul>

</li>
</ul>
