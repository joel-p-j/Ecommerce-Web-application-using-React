import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

/* =========================
   SAFE JSON PARSER
========================= */
const safeParse = (key, fallback) => {
  try {
    const value = localStorage.getItem(key);
    if (!value || value === "undefined") return fallback;
    return JSON.parse(value);
  } catch (error) {
    return fallback;
  }
};

export const AuthProvider = ({ children }) => {

  /* =========================
     STATE
  ========================= */
  const [users, setUsers] = useState(() => safeParse("users", []));
  const [currentUser, setCurrentUser] = useState(() =>
    safeParse("currentUser", null)
  );

  /* =========================
     PERSIST USERS
  ========================= */
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  /* =========================
     PERSIST CURRENT USER
  ========================= */
  useEffect(() => {
    if (currentUser === null) {
      localStorage.removeItem("currentUser");
    } else {
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
    }
  }, [currentUser]);

  /* =========================
     CREATE ADMIN IF NOT EXISTS
  ========================= */
  useEffect(() => {
    const existingUsers = safeParse("users", []);
    const adminExists = existingUsers.some(u => u.role === "admin");

    if (!adminExists) {
      const admin = {
        email: "admin@gmail.com",
        password: "admin",
        role: "admin",
      };

      const updatedUsers = [...existingUsers, admin];
      setUsers(updatedUsers);
      localStorage.setItem("users", JSON.stringify(updatedUsers));
    }
  }, []);

  /* =========================
     REGISTER USER
  ========================= */
  const RegisterUser = (email, password) => {
    const exists = users.find(u => u.email === email);
    if (exists) {
      alert("User already exists");
      return false;
    }

    const newUser = {
      email,
      password,
      role: "customer",
    };

    setUsers([...users, newUser]);
    return true;
  };

  /* =========================
   LOGIN USER
========================= */
const LoginUser = (email, password) => {
  const found = users.find(
    (u) => u.email === email && u.password === password
  );

  if (found) {
    setCurrentUser(found);
    alert("Login Successfully");
    return found;
  }

  alert("Invalid email or password");
  return null;
};


  /* =========================
     LOGOUT USER
  ========================= */
  const LogoutUser = () => {
    setCurrentUser(null);
    alert("Logged out Successfully");
  };

  return (
    <AuthContext.Provider
      value={{
        users,
        setUsers,
        currentUser,
        RegisterUser,
        LoginUser,
        LogoutUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
