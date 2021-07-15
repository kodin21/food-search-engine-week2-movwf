import { DombulDOM } from "dombul-dom";
import Loading from "../components/Loading";

const RootNode = document.getElementById("root");

export const showLoading = () => {
  DombulDOM.render(Loading(), RootNode);
};

export const hideLoading = () => {
  let removedNode = document.getElementById("js-loading");

  RootNode.removeChild(removedNode);
};
