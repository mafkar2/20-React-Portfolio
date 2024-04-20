import coverImage from '../../assets/cover-image.jpg';

function Header(props) {

  return (
    <header className="flex-row space-between px-1">
      <h1>Fatemeh Afkar</h1>
      <img src={coverImage} alt="lake image"></img>
      {props.children}
    </header>
  );
}

export default Header;
