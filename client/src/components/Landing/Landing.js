import React, { useState } from 'react'
import { Form } from '../Form/Form'
import { Button } from '../Button/Button'
import { Select } from '../Select/Select'
import {
  Container, Row, Col, Card, CardBody, FormGroup, Label, Input
} from 'reactstrap';
import './Landing.css'

export const Landing = () => {
  const [fields, setFields] = useState({
    department: '',
    city: '',
    name: '',
    email: ''
  });

  const [departments, setDepartments] = useState([])
  const [cities, setCities] = useState([])

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log('olo');
    fetch('http://localhost:3001/api/user', {
      body: JSON.stringify(fields),
      headers: { "Content-Type": "application/json" },
      method: 'POST'
    })
  }

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    setFields(prevFields => ({ ...prevFields, [name]: value }))
  }

  const handleSelectClick = (evt) => {
    const { name } = evt.target;
    if (name !== 'department') return;
    fetch('http://localhost:3001/api/departments')
      .then(res => res.json())
      .then(res => setDepartments(res))
  }

  const handleSelectChange = (evt) => {
    const { value, name } = evt.target;

    if (name === "city") {
      setFields(prevFields => ({ ...prevFields, city: value }))
      return;
    } else if (name === "department") {
      setFields(prevFields => ({ ...prevFields, department: value }))
    } else if (!value || value === 'Seleccione uno') {
      return
    }

    fetch(`http://localhost:3001/api/cities/${value}`)
      .then(res => res.json())
      .then(res => setCities(res))
  }
  return (
    <main>
      <Container className="container">
        <Row>
          <Col className="col-12">
            <div className="box-logo">
              <img className="img-logo-sigma" src="https://sigma-studios.s3-us-west-2.amazonaws.com/test/sigma-logo.png" alt="logo sigma studio" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="col-12">
            <div className="title-text">
              <span className="text-title-label">Prueba de desarrollo Sigma</span>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="col-12">
            <div className="paragraph-text">
              <span className="text-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</span>
            </div>
          </Col>
        </Row>
        <Row>
          <div className="col-6 ">
            <img className="form-img-banner" src="https://sigma-studios.s3-us-west-2.amazonaws.com/test/sigma-image.png" alt="imagen-bienvenida milticolor" />
          </div>
          <div className="col-6">
            <Card className="card-form">
              <CardBody>
                <Form onSubmit={handleSubmit}>
                  <Label htmlFor="department" className="sigma__label">Departamento*</Label>
                  <Select options={departments} onClick={handleSelectClick} onChange={handleSelectChange} name="department" className="sigma__select" required />
                  <Label htmlFor="city" className="sigma__label">Ciudad*</Label>
                  <Select options={cities} onClick={handleSelectClick} onChange={handleSelectChange} name="city" className="sigma__select" required />

                  <FormGroup>
                    <Label htmlFor="name" className="sigma__label">Nombre*</Label>
                    <Input value={fields.name} onChange={handleInputChange} name="name" placeholder="Ingrese nombre completo" className="sigma__input" required />
                  </FormGroup>

                  <FormGroup>
                    <Label htmlFor="email" className="sigma__label">Correo*</Label>
                    <Input value={fields.email} onChange={handleInputChange} name="email" placeholder="Example@mail.com" className="sigma__input" required />
                  </FormGroup>
                  <Row>
                    <div className="col-12">
                       <div className="box-buttom">
                      <Button type="submit" className="sigma__button">ENVIAR</Button>
                    </div>
                    </div>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </div>
        </Row>

        <footer className="footer">
          <Row>
            <div className="col-6">
              <span className="text-name-label">Jasson Esteban Gualguan Guzmán</span>
            </div>
            <div className="col-6">
              <span className="text-bussines-label">Sigma studio | we code    -    2020</span>
            </div>
          </Row>
        </footer>
      </Container>


    </main>
  )
}
