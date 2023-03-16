import React from "react";

export default function MyGroupsCard(props) {
  const groupID = props.groupID;
  const openGroupPage = () => {
    //do something
    console.log("open group page", groupID);
  };
  return (
    <div
      className="flex flex-col w-1/4 mr-10 my-4 p-8 cursor-pointer"
      style={{
        boxShadow: "rgba(236, 236, 236, 0.44) 0px 0px 15px",
        border: "1px solid #f8f4ef",
        background: "#fff",
      }}
      onClick={() => openGroupPage()}
    >
      <h2 className="text-xl font-semibold">{props.title}</h2>
      <p className="mt-1">
        {props.members} members | {props.categories}
      </p>
      <p className="mt-4">{props.description}</p>
    </div>
  );
}
