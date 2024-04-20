import React from "react";
import { Container, Card, Form, Button, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { REGISTRATION_ROUTE } from "../utils/consts";

const Auth = () => {
  return (
    <Container
      className="justify-content-center align-items-center d-flex"
      style={{height: window.innerHeight - 54}}
    >
      <Card style={{width: 600}} className="p-5">
        <h2 className="m-auto">Авторизация</h2>
        <Form className="d-flex flex-column">
          <Form.Control className="mt-3" placeholder="Введите ваш email..."/>
          <Form.Control className="mt-3" placeholder="Введите ваш пароль..."/>
          <Row className="d-flex mt-3 align-items-center">
            <Col className="d-flex justify-content-between">
              Нет аккаунта? <NavLink style={{textDecoration: 'none'}} to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
            </Col>
            <Col className="d-flex justify-content-end">
              <Button variant="outline-success">Войти</Button>
            </Col>
          </Row>
        </Form>
      </Card>
    </Container>
  )
};

export default Auth;
