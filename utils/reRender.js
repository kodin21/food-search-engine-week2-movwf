import { DombulDOM } from "dombul-dom";

export const reRender = (parentNodeId, nodeId, nodeComponent, newProps) => {
  let parentNode = document.getElementById(parentNodeId);
  let prevNode = document.getElementById(nodeId);
  // Remove the previous node
  parentNode.removeChild(prevNode);

  parentNode.append(createDOMElement(nodeComponent(newProps)));
};

export const initialResultsListRender = (
  parentNodeId,
  nodeID,
  newNodes,
  newNodeComponent
) => {
  let parentNode = document.getElementById(parentNodeId);
  let prevNode = document.getElementById(nodeID);
  // Remove the previous node
  parentNode.removeChild(prevNode);

  // Render new Nodes
  newNodes.forEach((node) => {
    DombulDOM.render(newNodeComponent(node), parentNode);
  });
};

export const updateResultListRender = (
  parentNodeId,
  nodeID,
  nodeComponent,
  newNodes
) => {
  let parentNode = document.getElementById(parentNodeId);
  let prevNode = document.getElementById(nodeID);
  // Remove the previous node
  parentNode.removeChild(prevNode);

  DombulDOM.render(nodeComponent(newNodes), parentNode);
};

export const insertReRender = (
  parentNodeId,
  nodeId,
  nodeComponent,
  newProps,
  referenceId
) => {
  let parentNode = document.getElementById(parentNodeId);
  let prevNode = document.getElementById(nodeId);
  let refNode = document.getElementById(referenceId);
  // Remove the previous node
  parentNode.removeChild(prevNode);

  parentNode.insertBefore(createDOMElement(nodeComponent(newProps)), refNode);
};

/*
  =====================================
    DOMBUL-DOM FUNCTIONS FOR CREATING
    DOM ELEMENTS BY JSX COMPONENTS
  =====================================
*/

export function createDOMElement(childNode) {
  const { type, props } = childNode;

  // Create DOM - Selective
  const element =
    type === "TEXT"
      ? document.createTextNode(props.nodeValue)
      : document.createElement(type);

  // Spread props
  Object.keys(props)
    .filter(isAttribute)
    .forEach((attribute) => {
      element[attribute] = props[attribute];
    });

  // Spread listeners
  Object.keys(props)
    .filter(isListener)
    .forEach((listener) => {
      element.addEventListener(
        listener.toLowerCase().substr(2), // Event Type : onClick -> "click"
        props[listener] // Event callback : () => {}
      );
    });

  // Append child elements
  const childElements = props.children || [];
  childElements.forEach((childElement) =>
    createDOMElement(childElement, element)
  );

  return element;
}

function isListener(prop) {
  return prop.startsWith("on");
}

function isAttribute(prop) {
  return !isListener(prop) && prop !== "children";
}
