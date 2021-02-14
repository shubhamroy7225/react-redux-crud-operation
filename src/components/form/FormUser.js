import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { addUsersSuccess,updateUser } from "../../redux/actions/UsersActions";
function FormUser(props) {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    imgUrl: null,
  });
  const [form,setForm] = useState(props.userData)
  const dispatch = useDispatch();
  const onChangeFormData = (evt) => {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
    });
  };
  const onChangeForm = (evt) => {
    setForm({
      ...form,
      [evt.target.name]: evt.target.value,
    })
  };
  const handleChanges = (evt) => {
    if(form.imgUrl != ''){
      setForm({...form,imgUrl:form.imgUrl})
    }
    let file = evt.target.files[0];
    var reader = new FileReader();
    var url = reader.readAsDataURL(file);
    reader.onloadend = (e) => {
      setFormData({ ...form, imgUrl: reader.result });
    };
  };

  const handleChange = (evt) => {
    let file = evt.target.files[0];
    var reader = new FileReader();
    var url = reader.readAsDataURL(file);
    reader.onloadend = (e) => {
      setFormData({ ...formData, imgUrl: reader.result });
    };
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    if(props.userData === undefined){
    dispatch(addUsersSuccess(formData));
    }else{
      dispatch(updateUser(form))
    }
    props.onClose();
  };
  return (
    <div>
      {props.userData === undefined ?
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            placeholder="Enter title here"
            value={formData.title}
            onChange={onChangeFormData}
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            name="description"
            placeholder="Enter description here"
            value={formData.description}
            onChange={onChangeFormData}
          />
        </Form.Group>
        <input
          type="file"
          name="user[image]"
          multiple="true"
          onChange={handleChange}
        />
        <br />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form> 
      :
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            placeholder="Enter title here"
            value={form.title}
            onChange={onChangeForm}
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            name="description"
            placeholder="Enter description here"
            value={form.description}
            onChange={onChangeForm}
          />
        </Form.Group>
        <input
          type="file"
          name="user[image]"
          multiple="true"
          onChange={handleChanges}
        />
        <br />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
}
    </div>
  );
}

export default FormUser;
