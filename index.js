import { DombulDOM } from "dombul-dom";

const App = () => {
  return <div id="js-app" className="h-screen w-screen flex flex-col"></div>;
};

DombulDOM.render(App(), document.getElementById("root"));
