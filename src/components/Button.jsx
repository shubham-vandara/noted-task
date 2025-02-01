/* eslint-disable react/prop-types */

// PRESENTATIONAL COMPONENT

import { MdEdit } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";

export default function Button({ text, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`${
        text === "Edit"
          ? "bg-blue-500 hover:bg-blue-600"
          : "bg-red-500 hover:bg-red-600"
      } transition-all cursor-pointer  text-white p-2 rounded`}
    >
      {text === "Edit" ? <MdEdit size={20} /> : <MdDeleteOutline size={20} />}
    </button>
  );
}
