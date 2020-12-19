import React from "react";
const InputForm = ({
  addItem,
  inputValue,
  handleChange,
  inputIsEmpty,
  noItemsFound,
  deleteLastItem,
}) => {
  return (
    <>
      <form onSubmit={addItem}>
        <input
          type="text"
          placeholder="Enter New Item"
          value={inputValue}
          onChange={handleChange}
        />
        <button disabled={inputIsEmpty()}>Add</button>
      </form>

      <button onClick={deleteLastItem} disabled={noItemsFound()}>
        Delete Last Item
      </button>
    </>
  );
};

export default InputForm;
