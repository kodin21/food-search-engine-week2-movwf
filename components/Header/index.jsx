import { DombulDOM } from 'dombul-dom';

const Header = ({ name }) => {
  return (
    <header className="w-full flex flex-col px-8 pt-8 pb-4">
      <span className="italic font-light text-lg">Hello,</span>
      <span id="js-user-name" className="text-xl">{name}</span>
      <span className="text-3xl text-center mt-6">
        What's on your mind, today?
      </span>
    </header>
  );
};

export default Header;