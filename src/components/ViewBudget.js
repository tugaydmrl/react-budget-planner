import React from "react";

const ViewBudget = ({ budget, handleEditClick }) => {
  return (
    <>
      <span>Budget: {budget}₺</span>
      <button type="button" class="btn btn-primary" onClick={handleEditClick}>
        Edit
      </button>
    </>
  );
};

export default ViewBudget;
