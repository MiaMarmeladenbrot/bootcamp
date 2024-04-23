# Plan

Was muss Server können?

Collection 1: movieDetails -> moviesDAO.js /

1. alle Filme anzeigen: GET /api/v1/movies ✅
2. Details eines Films anzeigen: GET /api/v1/movies/:movieId ✅
3. einen Film hinzufügen: POST /api/v1/movies ✅
4. einen Film bearbeiten: PATCH /api/v1/movies/:movieId ✅
5. (einen Film löschen: DELETE /api/v1/movies/:movieId ✅)

Collection 2: favorites -> favoritesDAO.js

6. alle Favoriten-Filme anzeigen: GET /api/v1/favorites
   -> mit movieId aus favorites Daten aus movieDetails ausgeben, s. favoritesDAO.js
7. einen Film zu Favoriten hinzufügen: POST /api/v1/favorites
   -> Dopplung von movieId verhindern, s. favoritesDAO.js
8. einen Film aus Favoriten entfernen: DELETE /api/v1/favorites/:favoriteId ✅
