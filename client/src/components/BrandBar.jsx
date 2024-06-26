import React, { useContext } from "react";
import { Context } from "../index.js";
import { observer } from 'mobx-react-lite';
import { Container, Card } from "react-bootstrap";

const BrandBar = observer(() => {
  const { device } = useContext(Context);

  return (
    <Container className="d-flex flex-wrap">
      {device.brands.map((brand) => 
        <Card
          style={{cursor: 'pointer'}}
          key={brand.id}
          className="p-3"
          onClick={() => device.setSelectedBrand(brand)}
          border={brand.id === device.selectedBrand.id ? 'danger' : 'light'}
        >
          {brand.name}
        </Card>
      )}
    </Container>
  )
});

export default BrandBar;