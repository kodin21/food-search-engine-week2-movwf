import { DombulDOM } from "dombul-dom";
import Header from "./components/Header";

const App = () => {
  return (
    <div id="js-app" className="h-screen w-screen flex flex-col">
      {Header({ name: "John Doe" })}
      {SearchBar()}
    </div>
  );
};

DombulDOM.render(App(), document.getElementById("root"));
