const Header = ({ darkMode, handelToggleDarkMode }) => {
  
  const handleDarkMode = () => {
    handelToggleDarkMode((prev) => !prev);
  
    if (!darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  };
  return (
    <div className="header">
      <h1 className="title">Notes</h1>
      <button className="save" onClick={handleDarkMode}>
        Toggle Mode
      </button>
    </div>
  );
};

export default Header;
