// // context/AuthContext.jsx
// import React, { createContext, useContext, useState, useEffect } from 'react';

// // Crear el contexto
// const AuthContext = createContext();

// // Crear el proveedor del contexto
// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null); // user puede contener información como { role: 'ONG', ... }

//   // Simulación de autenticación (reemplazar con lógica real)
//   const login = (userData) => {
//     setUser(userData);
//     localStorage.setItem('user', JSON.stringify(userData));
//   };

//   const logout = () => {
//     setUser(null);
//     localStorage.removeItem('user');
//   };

//   useEffect(() => {
//     // Cargar el usuario desde localStorage al iniciar
//     const storedUser = localStorage.getItem('user');
//     if (storedUser) {
//       setUser(JSON.parse(storedUser));
//     }
//   }, []);

//   return (
//     <AuthContext.Provider value={{ user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// // Hook para usar el contexto de autenticación
// export const useAuth = () => {
//   return useContext(AuthContext);
// };

// AuthContext.jsx
// import React, { createContext, useContext, useState, useEffect } from 'react';

// // Crear el contexto
// const AuthContext = createContext();

// // Crear el proveedor del contexto
// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null); // user puede contener información como { role: 'ONG', email: '...', ... }

//   // Función para iniciar sesión
//   const login = (userData) => {
//     setUser(userData);
//     localStorage.setItem('user', JSON.stringify(userData));
//   };

//   // Función para cerrar sesión
//   const logout = () => {
//     setUser(null);
//     localStorage.removeItem('user');
//   };

//   useEffect(() => {
//     // Cargar el usuario desde localStorage al iniciar
//     const storedUser = localStorage.getItem('user');
//     if (storedUser) {
//       setUser(JSON.parse(storedUser));
//     }
//   }, []);

//   return (
//     <AuthContext.Provider value={{ user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// // Hook para usar el contexto de autenticación
// export const useAuth = () => {
//   return useContext(AuthContext);
// };

// ./src/components/Context/AuthContext.jsx

// import React, { createContext, useContext, useState, useEffect } from 'react';

// // Crear el contexto
// const AuthContext = createContext();

// // Crear el proveedor del contexto
// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null); // user puede contener información como { role: 'ONG', email: '...', ... }

//   // Función para iniciar sesión
//   const login = (userData) => {
//     setUser(userData);
//     localStorage.setItem('user', JSON.stringify(userData));
//   };

//   // Función para cerrar sesión
//   const logout = () => {
//     setUser(null);
//     localStorage.removeItem('user');
//   };

//   useEffect(() => {
//     // Cargar el usuario desde localStorage al iniciar
//     const storedUser = localStorage.getItem('user');
//     if (storedUser) {
//       setUser(JSON.parse(storedUser));
//     }
//   }, []);

//   return (
//     <AuthContext.Provider value={{ user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// // Hook personalizado para usar el contexto de autenticación
// export const useAuth = () => {
//   return useContext(AuthContext);
// };

// import React, { createContext, useContext, useState, useEffect } from 'react';

// // Crear el contexto
// const AuthContext = createContext();

// // Crear el proveedor del contexto
// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null); // user puede contener información como { role: 'ONG', email: '...', etc. }

//   // Función para iniciar sesión
//   const login = (userData) => {
//     setUser(userData);
//     localStorage.setItem('user', JSON.stringify(userData));
//   };

//   // Función para cerrar sesión
//   const logout = () => {
//     setUser(null);
//     localStorage.removeItem('user');
//   };

//   useEffect(() => {
//     // Cargar el usuario desde localStorage al iniciar
//     const storedUser = localStorage.getItem('user');
//     if (storedUser) {
//       setUser(JSON.parse(storedUser));
//     }
//   }, []);

//   return (
//     <AuthContext.Provider value={{ user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// // Hook personalizado para usar el contexto de autenticación
// export const useAuth = () => {
//   return useContext(AuthContext);
// };


import React, { createContext, useContext, useState, useEffect } from 'react';

// Crear el contexto
const AuthContext = createContext();

// Crear el proveedor del contexto
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // user puede contener información como { role: 'ONG', email: '...', etc. }

  // Función para iniciar sesión
  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  // Función para cerrar sesión
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  useEffect(() => {
    // Cargar el usuario desde localStorage al iniciar
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook personalizado para usar el contexto de autenticación
export const useAuth = () => {
  return useContext(AuthContext);
};
