import { useState } from "react";
import CookieCounter from "./components/CookieClicker.jsx";
import CatFacts from "./components/CatFacts.jsx";
import Users from "./components/Users.jsx";
import "./App.css";

export default function App() {
  return (
    <>
      <CookieCounter />
      <CatFacts />
      <Users/>
    </>
  );
}
