import React, { useContext, useState } from "react";
import { Container, Card, Form, Button, Row, Col } from "react-bootstrap";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { login, registration } from "../http/userApi.js";
import { observer } from "mobx-react-lite";
import { Context } from "../index.js";

const Auth = observer(() => {
  const { user } = useContext(Context)
  const location = useLocation();
  const navigate = useNavigate()
  const isLogin = location.pathname === LOGIN_ROUTE;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  const click = async () => {
    try {
      let data;
      if (isLogin) {
        data = await login(email, password)
      } else {
        data = await registration(email, password)
      }
      user.setUser(data)
      user.setIsAuth(true)
      navigate(SHOP_ROUTE)
    } catch (e) {
      alert(e.response.data.message)
    }
  }


  return (
    <Container
      className="justify-content-center align-items-center d-flex"
      style={{height: window.innerHeight - 54}}
    >
      <Card style={{width: 600}} className="p-5">
        <h2 className="m-auto">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
        <Form className="d-flex flex-column">
          <Form.Control
            className="mt-3"
            placeholder="Введите ваш email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Control
            className="mt-3"
            placeholder="Введите ваш пароль..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          <Row className="d-flex mt-3 align-items-center">
            {isLogin ?
              <Col>
                Нет аккаунта? <NavLink style={{textDecoration: 'none'}} to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
              </Col>
              :
              <Col>
                Есть аккаунт? <NavLink style={{textDecoration: 'none'}} to={LOGIN_ROUTE}>Войдите!</NavLink>
              </Col>
            }
            <Col className="d-flex justify-content-end">
              <Button
                variant="outline-success"
                onClick={click}
              >
                {isLogin ? 'Войти' : 'Регистрация'}
              </Button>
            </Col>
          </Row>
        </Form>
      </Card>
    </Container>
  )
});

export default Auth;
