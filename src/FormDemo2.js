import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import alertify from 'alertifyjs'

export default class FormDemo2 extends Component {
  state = { email: " ", password: " ", city: " ", description: " " }
  handleChange = event => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  }

  handleSubmit = event => {
    event.preventDefault();
    alertify.success(this.state.email + " added to db!")
    alertify.success(this.state.password + " added to db!")
    alertify.success(this.state.city + " added to db!")
    alertify.success(this.state.description + " added to db!")
  }


  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="exampleEmail">Eposta</Label>
            <Input
              id="email"
              name="email"
              placeholder="Email Giriniz."
              type="email"
              onChange={this.handleChange}
            />
          </FormGroup>

          <FormGroup>
            <Label for="examplePassword">Şifre</Label>
            <Input
              id="password"
              name="password"
              placeholder="Password Giriniz."
              type="password"
              onChange={this.handleChange}
            />
          </FormGroup>

          <FormGroup>
            <Label for="exampleDescription">Açıklama</Label>
            <Input
              id="description"
              name="description"
              placeholder="Açıklama Giriniz."
              type="textarea"
            />
          </FormGroup>

          <FormGroup>
            <Label for="exampleCity">City</Label>
            <Input
              id="city"
              name="select"
              type="form-select"
              onChange={this.handleChange}
            >
              <option>Ankara</option>
              <option>İstanbul</option>
              <option>Adana</option>
              <option>İzmir</option>
              <option>Sakarya</option>
            </Input>
        </FormGroup>

        <Button type='submit'>Kaydet</Button>
      </Form>
      </div >
    )
  }
}
