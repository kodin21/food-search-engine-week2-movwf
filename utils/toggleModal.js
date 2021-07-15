import { DombulDOM } from "dombul-dom";
import ModalBackdrop from "../components/ModalBackdrop";

export const showModal = (childElem, elementId) => {
  let appNode = document.getElementById("js-app");

  DombulDOM.render(ModalBackdrop(childElem), appNode);

  setTimeout(() => {
    document.getElementById(elementId).focus();
  }, 1000);
};

export const closeModal = () => {
  let appNode = document.getElementById("js-app");

  appNode.removeChild(document.getElementById("js-modal"));
};
