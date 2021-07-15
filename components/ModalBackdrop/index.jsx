import { DombulDOM } from 'dombul-dom';
import { closeModal } from '../../utils/toggleModal';

const ModalBackdrop = (children) => {
  return (
    <div
      id="js-modal"
      className="fixed z-20 w-screen h-screen top-0 left-0 backdrop-filter backdrop-blur-sm flex flex-col justify-center items-center"
      onClick={(e)=>{
        let modal = document.getElementById("js-modal");
        if(e.target == modal){
          closeModal();
        }
      }}
    >
      {children}
    </div>
  );
};

export default ModalBackdrop;