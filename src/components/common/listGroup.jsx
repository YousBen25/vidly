import React from "react";

const ListGroup = (props) => {
  const { items, textProperty, valueProperty } = props;
  return (
    <ul class="list-group">
      {items.map((item) => (
        <li class="list-group-item" key={item[valueProperty]}>
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
    textProperty: 'name',
    valueProperty: '_id',
};

export default ListGroup;
