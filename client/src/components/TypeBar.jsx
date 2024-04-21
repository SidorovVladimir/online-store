import React, { useContext } from "react";
import { Context } from "../index.js";
import { observer } from 'mobx-react-lite';
import { ListGroup } from "react-bootstrap";

const TypeBar = observer(() => {
  const { device } = useContext(Context);

  return (
    <ListGroup>
      {device.types.map((type) => 
        <ListGroup.Item
          style={{cursor: 'pointer'}}
          active={device.selectedType.id === type.id}
          key={type.id}
          onClick={() => device.setSelectedType(type)}
        >
          {type.name}
        </ListGroup.Item>
      )}
    </ListGroup>
  )
});

export default TypeBar;