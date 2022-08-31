import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import Form from "react-bootstrap/Form";
import classes from "../Form/form.module.css";
import {
  setCars,
  setMark,
  setModel,
  setRegion,
} from "../../Redux/reducerFormAdv";
import {
  requestCars,
  requestMark,
  requestModel,
  requestRegion,
} from "../../Redux/reducerFormAdv";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const FormAdvertisement = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const advertisementPage = useSelector((state) => state.advertisementPage);
  const [typeValue, setTypeValue] = useState();
  const [markValue, setMarkValue] = useState();

  const routeChange = () => {
    let path = `/cardOfCar`;
    navigate(path);
  };

  useEffect(() => {
    dispatch(requestCars(setCars));
  }, []);
  useEffect(() => {
    dispatch(requestRegion(setRegion));
  }, []);
  useEffect(() => {
    dispatch(requestMark(typeValue, setMark));
  }, []);
  useEffect(() => {
    dispatch(requestModel(typeValue, markValue, setModel));
  });

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
      price_to: "",
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
        <Form.Select
          name="typeOfVehicle"
          //onChange={formik.handleChange}
          size="sm"
          onChange={(e) => {
            setTypeValue(e.target.value);
            formik.handleChange(e);
          }}
        >
          <option>Type of vehicle</option>
          {advertisementPage.typeCars.map((obj) => (
            <option key={obj.value} value={obj.value}>
              {obj.name}
            </option>
          ))}
        </Form.Select>
        <Form.Label>Mark</Form.Label>
        <Form.Select
          name="brand"
          onChange={(e) => {
            setMarkValue(e.target.value);
            formik.handleChange(e);
          }}
          size="sm"
        >
          <option>Mark</option>
          {advertisementPage.markCars.map((obj) => (
            <option key={obj.value} value={obj.value}>
              {obj.name}
            </option>
          ))}
        </Form.Select>
        <Form.Label>Model</Form.Label>
        <Form.Select
          name="model"
          onChange={(e) => {
            formik.handleChange(e);
          }}
          size="sm"
        >
          <option>Model</option>
          {advertisementPage.modelCars.map((obj) => (
            <option key={obj.value} value={obj.value}>
              {obj.name}
            </option>
          ))}{" "}
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
          {advertisementPage.region.map((obj) => (
            <option key={obj.value} value={obj.value}>
              {obj.name}
            </option>
          ))}
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
        <button onClick={routeChange} type="submit">
          Submit
        </button>
      </div>
    </Form>
  );
};

export default FormAdvertisement;
