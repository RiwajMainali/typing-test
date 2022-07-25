export default function Timer(props) {
  const time = props.children;
  return (
    <>
      <div
        className={`timer bg-light tile ${
          time <= 10 ? "bg-danger" : "bg-success"
        }`}
        style={{
          width: "100px",
          height: "100px",
          margin: "50px auto 0px",
          borderRadius: "25px",

          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h2 style={{ margin: "0" }}>{time}</h2>
      </div>
    </>
  );
}
