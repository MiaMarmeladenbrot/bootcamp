import { createContext } from "react";

// Wir erstellen eine Context und exportieren ihn damit er überall verfügbar ist, wenn wir in Importieren
export const LoadingContext = createContext();
export const FetchContext = createContext();
export const ThemeContext = createContext();
