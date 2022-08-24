import React, { useEffect } from 'react';
import { useFormik } from "formik";
import Form from 'react-bootstrap/Form';
import classes from "../Form/form.module.css";


const FormAdvertisement = () => {
  



  const formik = useFormik({
    initialValues: {
      typeOfVehicle: "",
      brand: "",
      model: "",
      VerifiedVin: false,
      region: "",
      year_at: "",
      year_to: "",
      price_at: "",
      price_to: ""
              
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
 
  return (
     <Form
      onSubmit={formik.handleSubmit}
      className={classes.gridcontainerelement}
    >
      <div>
        <Form.Label>Type of vehicle</Form.Label>
        <Form.Select    name="typeOfVehicle" onChange={formik.handleChange} size="sm">
        <option>car</option>
        </Form.Select>
        <Form.Label>Brand</Form.Label>
        <Form.Select name="brand" onChange={formik.handleChange} size="sm">
          <option>brand</option>
        </Form.Select>
        <Form.Label>Model</Form.Label>
        <Form.Select name="model" onChange={formik.handleChange} size="sm">
          <option>Model</option>
        </Form.Select>
        <Form.Check
          onChange={formik.handleChange}
          type="switch"
          id="custom-switch"
          label="VerifiedVin"
          name="VerifiedVin"
        />
      </div>

      <div className={classes.gridchildelement}>
        <Form.Label>Region</Form.Label>
        <Form.Select name="region" onChange={formik.handleChange} size="sm">
          <option>Region</option>
        </Form.Select>
        <Form.Label>Year</Form.Label>
        <Form.Control
          onChange={formik.handleChange}
          placeholder="min. year"
          min="1990"
          name="year_at"
          type="number"
          id="year_at"
        />
        <Form.Control
          onChange={formik.handleChange}
          placeholder="max. year"
          min="0"
          name="year_to"
          type="number"
          id="year_to"
        />
        <Form.Label>Price</Form.Label>
        <Form.Control
          onChange={formik.handleChange}
          placeholder="min. price"
          min="0"
          name="price_at"
          type="number"
          id="price_at"
        />
        <Form.Control
          onChange={formik.handleChange}
          placeholder="max. price"
          min="0"
          name="price_to"
          type="number"
          id="price_to"
        />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </Form> 
  );
};

export default FormAdvertisement;

