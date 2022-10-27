import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import classes from "../Form/form.module.css";
import {
  setCars,
  setMark,
  setModel,
  setValues } from "../../Redux/actions"
  import {requestCars,
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
  const [modelValue, setModelValue] = useState();
  const [regionValue, setRegionValue] = useState();
  const [minYearValue, setMinYearValue] = useState();
  const [maxYearValue, setMaxYearValue] = useState();
  const [minPriceValue, setMinPriceValue] = useState();
  const [maxPriceValue, setMaxPriceValue] = useState();

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
  }, [markValue]);
  useEffect(() => {
    dispatch(requestRegion());
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
       dispatch(
      requestIds(
        typeValue,
        markValue,
        modelValue,
        regionValue,
        minYearValue,
        maxYearValue,
        minPriceValue,
        maxPriceValue
      )
    );
    routeChange();
  };

  return (
    <Form className={classes.gridcontainerelement} onSubmit={handleSubmit}>
      <div>
        <Form.Select
        variant="dark"
          size="sm"
          onChange={(e) => {
            dispatch(setValues(e.target.value));
            setTypeValue(e.target.value);
          }}
        >
          <option>Категория</option>
          {advertisementPage.typeCars.map((obj) => (
            <option key={obj.value} value={obj.value}>
              {obj.name}
            </option>
          ))}
        </Form.Select>
        <br />
        <Form.Select
          onChange={(e) => {
            setMarkValue(e.target.value);
          }}
          size="sm"
        >
          <option>Марка авто</option>
          {advertisementPage.markCars.map((obj) => (
            <option key={obj.value} value={obj.value}>
              {obj.name}
            </option>
          ))}
        </Form.Select>
        <br />

        <Form.Select
          size="sm"
          onChange={(e) => {
            setModelValue(e.target.value);
          }}
        >
          <option>Модель</option>
          {advertisementPage.modelCars.map((obj) => (
            <option key={obj.value} value={obj.value}>
              {obj.name}
            </option>
          ))}
        </Form.Select>
        <br />
        <Form.Select
          onChange={(e) => {
            setRegionValue(e.target.value);
          }}
          size="sm"
        >
          <option>Регион</option>
          {advertisementPage.region.map((obj) => (
            <option key={obj.value} value={obj.value}>
              {obj.name}
            </option>
          ))}
        </Form.Select>
        <br />
      </div>
      <div>
        <Form.Control
          onChange={(e) => {
            setMinYearValue(e.target.value);
          }}
          placeholder="min. year"
          min="1990"
          type="number"
          id="year_at"
          size="sm"
        />
        <br />
        <Form.Control
          onChange={(e) => {
            setMaxYearValue(e.target.value);
          }}
          placeholder="max. year"
          min="0"
          type="number"
          id="year_to"
          size="sm"
        />
        <br />

        <Form.Control
          onChange={(e) => {
            setMinPriceValue(e.target.value);
          }}
          placeholder="min. price"
          min="0"
          type="number"
          id="price_at"
          size="sm"
        />
        <br />
        <Form.Control
          onChange={(e) => {
            setMaxPriceValue(e.target.value);
          }}
          placeholder="max. price"
          min="0"
          name="price_do"
          id="price_to"
          size="sm"
        />
        <br />
      </div>
      <div className="d-grid gap-2">
        <Button type="submit" variant="dark" size="sm">
          Поиск
        </Button>
      </div>
    </Form>
  );
};
export default FormAdvertisement;
