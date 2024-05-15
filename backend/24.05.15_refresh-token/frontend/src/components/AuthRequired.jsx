// ! Komponente für protected routes
// checkt, ob der User einen gültigen Token hat
// nur wenn er ihn hat, kann er die Children von AuthRequired anzeigen lassen
// falls er keinen mehr hat, wird er zum Login weitergeleitet

import { Navigate } from "react-router-dom";

const AuthRequired = ({ token, children }) => {
  return token ? <>{children}</> : <Navigate to="/login" />;
};

export default AuthRequired;

/* <AuthRequired>
    // ... children
    // ... children
    // ... children
    </AuthRequired>; */
