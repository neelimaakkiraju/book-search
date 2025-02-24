import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook, editBook } from "../redux/bookSlice";

const BookItem = ({ book }) => {
    const dispatch = useDispatch();
    const [editMode, setEditMode] = useState(false);
    const [editedBook, setEditedBook] = useState(book);

    return (
        <div>
            {editMode ? (
                <input type="text" value={editedBook.title} onChange={(e) => setEditedBook({ ...editedBook, title: e.target.value })} />
            ) : (
                <h3>{book.title}</h3>
            )}

            <button onClick={() => dispatch(addBook(book))}>Add to List</button>
            {editMode ? (
                <button onClick={() => dispatch(editBook({ id: book.id, updatedBook: editedBook }))}>Save</button>
            ) : (
                <button onClick={() => setEditMode(true)}>Edit</button>
            )}
        </div>
    );
};

export default BookItem;
