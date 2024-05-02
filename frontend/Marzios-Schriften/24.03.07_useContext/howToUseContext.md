** LoadingScreen **

1. Erstelle einen Context ordner mit einer Context.jsx
2. create ich einen Context und exportiere diesen (Context.jsx)
3. in der App.jsx dein erstellten Context importieren (App.jsx)
4. eine State in der App.jsx einen state mit useState erstellen (App.jsx)
5. <LoadingContext.Provider value={{ loading, setLoading }}> erstellen der den ganzen <BrowserRouter> umschliest value mit setter und getter mitgeben (App.jsx)
6. in der Loadingscreen.jsx useContext importieren => const { loading, setLoading } = useContext(LoadingContext); (Loadingscreen.jsx)
7. ihr enscheidet ob ihr beim importieren des useContext nur den setter oder getter importiert. Ihr könnt auch beides importieren.
