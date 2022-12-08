import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <div className="open-source">
        <a
          href="https://github.com/nesmorodina/weather-app"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          Open-source code
        </a>{" "}
        by Olga Neskorodiana
      </div>
    </div>
  );
}
