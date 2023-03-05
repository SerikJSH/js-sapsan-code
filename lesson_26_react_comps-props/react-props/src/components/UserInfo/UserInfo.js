import "./UserInfo.css";

export function UserInfo(props) {
    console.log("Props:", props);
  return (
    <div className="user">
      <div>Name: {props.name}</div>
      <div>Age: {props.age}</div>
    </div>
  );
}
