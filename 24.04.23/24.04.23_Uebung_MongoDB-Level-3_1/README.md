# Plan

Was muss Server können?

Collection 1: Movies -> moviesDAO.js

1. alle Filme anzeigen: GET /api/v1/movies ✅
2. Details eines Films anzeigen: GET /api/v1/movies/:movieId ✅
3. einen Film hinzufügen: POST /api/v1/movies ✅
4. einen Film bearbeiten: PATCH /api/v1/movies/:movieId ✅
5. (einen Film löschen: DELETE /api/v1/movies/:movieId ✅)

Collection 2: Favorite Movies -> favoritesDAO.js

6. einen Film zu Favoriten hinzufügen: POST /api/v1/favorites
7. einen Film aus Favoriten entfernen: DELETE /api/v1/favorites/:favoriteId
8. alle Favoriten-Filme anzeigen: GET /api/v1/favorites
