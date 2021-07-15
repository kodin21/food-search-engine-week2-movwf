import { DombulDOM } from "dombul-dom";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import "./utils/loadFetch";

const App = () => {
  return (
    <div id="js-app" className="h-screen w-screen flex flex-col">
      {Header({ name: "John Doe" })}
      {SearchBar()}
      {SearchResults()}
    </div>
  );
};

DombulDOM.render(App(), document.getElementById("root"));
