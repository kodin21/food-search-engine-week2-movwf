import { DombulDOM } from "dombul-dom";
import { LOADING_MODAL_ID } from "../config/constants";
import Loading from "../components/Loading";

const RootNode = document.getElementById("root");

export const showLoading = () => {
  DombulDOM.render(Loading(), RootNode);
};

export const hideLoading = () => {
  let removedNode = document.getElementById(LOADING_MODAL_ID);

  RootNode.removeChild(removedNode);
};
