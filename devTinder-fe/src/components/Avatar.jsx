import {  useSelector } from "react-redux";

export function Avatar() {

  const user     = useSelector((store) =>store.user);
  return (
    <div>
      <div className="avatar">
        <div className="w-11 rounded">
          <img src= {user.photoUrl}  />
        </div>
      </div>
    </div>
  );
}
