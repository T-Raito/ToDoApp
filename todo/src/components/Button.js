export const Button = ({ onClick }) => {
  return <button style={style.button} onClick={onClick}></button>;
};

const style = {
  button: {
    fontSize: "20px",
    height: "50px",
    width: "100px",
    backgroundColor: "#b4c1d1",
    borderRadius: "100vh",
    border: "2px ridge #b4c1d1",
  },
};
