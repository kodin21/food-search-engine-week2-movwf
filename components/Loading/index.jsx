import { DombulDOM } from 'dombul-dom';

const Loading = () => {
  return (
    <div id="js-loading" className="fixed z-30 left-0 top-0 w-screen h-screen flex flex-col justify-center items-center backdrop-filter backdrop-blur-sm">
      <div className="pan-loader">
        <div className="loader"></div>
        <div className="pan-container">
          <div className="pan"></div>
          <div className="handle"></div>
        </div>
        <div className="shadow"></div>
      </div>
    </div>
  );
};

export default Loading;