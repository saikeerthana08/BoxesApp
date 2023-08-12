const Box = (props) => {
  //  Write your code here.
  const { className, text } = props;
  const containerClassName = `box-container ${className}`;
  return (
    <div className={containerClassName}>
      <p className="name">{text}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <h1 className="title">Boxes</h1>
    <div className="boxes-container">
      <Box className="box-1" text="Small" />
      <Box className="box-2" text="Medium" />
      <Box className="box-3" text="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
