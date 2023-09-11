import React from "react";

export default function Button({ title, onClick, className }) {
  return (
    <section>
      <button onClick={onClick} className={`${className}`}>
        {title}
      </button>
    </section>
  );
}
