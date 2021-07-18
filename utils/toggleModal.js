import { DombulDOM } from "dombul-dom";
import ModalBackdrop from "../components/ModalBackdrop";

export const showModal = async (childElem, elementId) => {
  let appNode = document.getElementById("js-app");

  await DombulDOM.render(ModalBackdrop(childElem), appNode);

  document.getElementById(elementId).focus();
};

export const closeModal = () => {
  let appNode = document.getElementById("js-app");

  appNode.removeChild(document.getElementById("js-modal"));
};
