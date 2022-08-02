import { MdDeleteForever } from "react-icons/md";

const Note = ({ text, date, id, deleteHandler }) => {
  return (
    <div className="note">
      <span>{text}</span>
      <div className="note-footer">
        <small>{date}</small>
        <MdDeleteForever
          onClick={() => deleteHandler(id)}
          className="delete-icon"
          size="1.3em"
          cursor="pointer"
        />
      </div>
    </div>
  );
};

export default Note;
