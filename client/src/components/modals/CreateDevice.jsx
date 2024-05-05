import React, { useContext, useState } from "react";
import { Modal, Button, Form, Dropdown, FormControl, Row, Col } from "react-bootstrap";
import { Context } from "../../index.js";


const CreateDevice = ({show, onHide}) => {
  const { device } = useContext(Context);
  const [info, setInfo] = useState([]);

  const addInfo = () => {
    setInfo([...info, { title: '', description: '', number: Date.now() }])
  };

  const removeInfo = (number) => {
    setInfo(info.filter((i) => i.number !== number));
  };


  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить устройство
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown className="mt-2 mb-2">
            <Dropdown.Toggle>
              Выберите тип
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {device.types.map((type) =>
                <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
              )}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="mt-2 mb-2">
          <Dropdown.Toggle>
              Выберите бренд
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {device.brands.map((brand) =>
                <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
              )}
            </Dropdown.Menu>
          </Dropdown>
          <FormControl
            placeholder="Введите название устройства"
            className="mt-3"
          />
          <FormControl
            placeholder="Введите стоимость устройства"
            className="mt-3"
            type="number"
          />
          <FormControl
            className="mt-3"
            type="file"
          />
          <hr />
          <Button onClick={addInfo} variant="outline-dark">Добавить свойство</Button>
          {info.map((i) =>
            <Row key={i.number} className="mt-3">
              <Col md={4}>
                <FormControl
                  placeholder="Введите названия свойства"
                />
              </Col>
              <Col md={4}>
                <FormControl
                  placeholder="Введите описание свойства"
                />
              </Col>
              <Col md={4}>
                <Button onClick={() => removeInfo(i.number)} variant="outline-danger">Удалить</Button>
              </Col>
            </Row>
          )}

        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
        <Button variant="outline-success" onClick={onHide}>Добавить</Button>
      </Modal.Footer>
    </Modal>
  )
};

export default CreateDevice;
