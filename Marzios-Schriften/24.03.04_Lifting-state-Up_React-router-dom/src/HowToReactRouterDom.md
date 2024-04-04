Wie benutze ich React-Router-Dom

1. Installieren von react-router-dom -> npm i react-router-dom
2. App.jsx => BrowserRouter, Routes, Route inportieren (oben)
3. in meine return muss ich BrowserRouter, Routes, Route benutzen
4. Bei Route müssen wir 2 sachen machen
   a. path="/about" definieren
   b. element={<About />} hier sagen wir unter welchen Pfad welche seite erreichbar seien soll
5. Import vom Link / NavLink von react router Dom (oben)
6. Dannach können wir zb in unseren Header Link benutzen um eine a tag zu erstelle zu der jeweiligen seite "<Link to="/about">About</Link>"
   der Pfad in "to" muss übereinstimmen mit dem Pfad in der App.jsx (WICHTIG!!!)
