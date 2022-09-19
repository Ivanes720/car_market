import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import Form from "react-bootstrap/Form";
import classes from "../Form/form.module.css";
import {
  setCars,
  setMark,
  setModel,
  setRegion,
  setValues,
  requestCars,
  requestMark,
  requestModel,
  requestRegion,
} from "../../Redux/reducerFormAdv";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { requestIds } from "../../Redux/reducerCardPage";
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
    dispatch(requestMark(typeValue, setMark));
  }, [typeValue]);
  useEffect(() => {
    dispatch(requestModel(typeValue, markValue, setModel));
  });
  useEffect(() => {
    dispatch(requestRegion(setRegion));
  }, [markValue]);
  const formik = useFormik({
    initialValues: {
      category_id: null,
      marka_id: null,
      model_id: null,
      verifiedVIN: null,
      state: null,
      s_yers: null,
      po_yers: null,
      price_ot: null,
      price_do: null,
    },
    onSubmit: (values) => {
      dispatch(
        requestIds(
          values.category_id,
          values.model_id,
          values.marka_id,
          values.state,
          values.s_yers,
          values.po_yers,
          values.price_ot,
          values.price_do
        )
      );
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
          name="category_id"
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
          name="marka_id"
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
          name="model_id"
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
        <Form.Select name="state" onChange={formik.handleChange} size="sm">
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
          name="s_yers"
          type="number"
          id="year_at"
        />
        <Form.Control
          onChange={formik.handleChange}
          placeholder="max. year"
          min="0"
          name="po_yers"
          type="number"
          id="year_to"
        />
        <Form.Label>Price</Form.Label>
        <Form.Control
          onChange={formik.handleChange}
          placeholder="min. price"
          min="0"
          name="price_ot"
          type="number"
          id="price_at"
        />
        <Form.Control
          onChange={formik.handleChange}
          placeholder="max. price"
          min="0"
          name="price_do"
          type="number"
          id="price_to"
        />
      </div>
      <div>
        <button
          onClick={(e) => {
            dispatch(
              requestIds(
                formik.values.category_id,
                formik.values.model_id,
                formik.values.marka_id,
                formik.values.state,
                formik.values.s_yers,
                formik.values.po_yers,
                formik.values.price_ot,
                formik.values.price_do
              )
            );
            routeChange(e);
          }}
          type="submit"
        >
          Submit
        </button>
      </div>
    </Form>
  );
};

export default FormAdvertisement;
