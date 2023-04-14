import React from "react";
const HeaderItem = (props) => {
  return (
    <li className={props.className} key={props.id}>
      <a href={props.referal}>{props.tag}</a>
    </li>
  );
};
export default HeaderItem;
