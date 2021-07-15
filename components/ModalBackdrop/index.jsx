import { DombulDOM } from 'dombul-dom';

const ModalBackdrop = (children) => {
  return (
    <div
      id="js-modal"
      className="fixed z-20 w-screen h-screen top-0 left-0 backdrop-filter backdrop-blur-sm flex flex-col justify-center items-center"
    >
      {children}
    </div>
  );
};

export default ModalBackdrop;