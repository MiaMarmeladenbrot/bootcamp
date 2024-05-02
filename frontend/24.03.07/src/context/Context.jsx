// * Import von createContext
// beim ersten Betreten der Website (nicht beim Wecheseln der Pages) soll ein 2-sekündiger Loadingscreen erscheinen
// src => neuer context-Ordner und darin eine Context.jsx
// hier dann:
import { createContext } from "react";

// * Context für Loading-Page:
// und export einer von uns benannten Variable:
export const LoadingContext = createContext();

// Name ist frei wählbar, best practice ist es, Context im Namen zu haben
// dieser Context ist jetzt global verfügbar
// weiter gehts in der App.jsx

// * Context für Fetch-Komponente:
export const FetchContext = createContext();

// * Context für Dark-Modus:
export const ThemeContext = createContext();
