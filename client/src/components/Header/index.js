import backdrop from '../../assets/cover/cover-image.jpg';

function Header(props) {

  return (
    <header className="flex-row space-between px-1">
      <h1>Fatemeh Afkar</h1>
      <img src={backdrop} alt="backdrop"></img>
      {props.children}
    </header>
  );
}
