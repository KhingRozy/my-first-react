import logo from "./logo.svg";
import "./App.css";
import Student from "./components/student";
import Counter from "./components/counter";
import Button from "./components/button";

export default function App() {
  return (
    <section>
      <Student />
      <Counter />
      <Button />
    </section>
  );
}
