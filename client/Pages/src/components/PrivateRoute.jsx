import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './Context/AuthContext'; // Asegúrate de que la ruta es correcta

const PrivateRoute = ({ children, roles }) => {
  const { user } = useAuth();

  if (!user) {
    // Si el usuario no está autenticado, redirigir al login
    return <Navigate to="/login" />;
  }

  if (roles && !roles.includes(user.role)) {
    // Si el usuario no tiene el rol requerido, redirigir a una página de acceso denegado o a inicio
    return <Navigate to="/" />;
  }

  // Si el usuario está autenticado y tiene el rol adecuado, renderizar el componente
  return children;
};

export default PrivateRoute;