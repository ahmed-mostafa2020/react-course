import './Button.css'

function Button({category, onFilter}) {
  const handleClick = () => {
    onFilter();
  }
  return(
    <>
    <button onClick={handleClick}>{category}</button>
    </>
  );
}

export default Button;