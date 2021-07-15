import { DombulDOM } from "dombul-dom";

const reRender = (parentNodeId, nodeID, newNodes, newNodeComponent) => {
  let parentNode = document.getElementById(parentNodeId);
  let prevNode = document.getElementById(nodeID);
  // Remove the previous node
  parentNode.removeChild(prevNode);

  // Render new Nodes
  newNodes.map((newNode) =>
    DombulDOM.render(newNodeComponent(newNode), parentNode)
  );
};

export const singleReRender = (
  parentNodeId,
  nodeID,
  newProps,
  newNodeComponent
) => {
  let parentNode = document.getElementById(parentNodeId);
  let prevNode = document.getElementById(nodeID);
  // Remove the previous node
  parentNode.removeChild(prevNode);

  // Render node with new props
  DombulDOM.render(newNodeComponent(newProps), parentNode);
};

export const updateResultListRender = (
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
  DombulDOM.render(newNodeComponent(newNodes), parentNode);
};

export default reRender;
