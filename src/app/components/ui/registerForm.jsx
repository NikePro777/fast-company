import React, { useEffect, useState } from "react";
import { validator } from "../../utils/validator";
import TextField from "../common/form/textField";
import api from "../../api";
const RegisterForm = () => {
  const [data, setData] = useState({ email: "", password: "", profession: "" });
  const [professions, setProfession] = useState([]);
  const [errors, setErrors] = useState({});
  useEffect(() => {
    api.professions.fetchAll().then((data) => setProfession(data));
  }, []);

  const handleChange = ({ target }) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }));
  };

  const validatorConfig = {
    email: {
      isRequired: { message: "Электронная почта должна быть заполнена" },
      isEmail: { message: "Почта заполнена не корректно" }
    },
    password: {
      isRequired: { message: "Парoль должен быть заполнен" },
      isCapitalSymbol: { message: "Минимум одна заглавная буква" },
      isContainDigit: { message: "Минимум одну цифра" },
      min: { message: "Минимум 8 символов", value: 8 }
    }
  };

  useEffect(() => {
    validate();
  }, [data]);

  const validate = () => {
    const errors = validator(data, validatorConfig);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const isValid = Object.keys(errors).length === 0;
  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validate();
    if (!isValid) return;
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Электроенная почта"
        name="email"
        value={data.email}
        onChange={handleChange}
        error={errors.email}
      />
      <TextField
        label="Пароль"
        type="password"
        name="password"
        value={data.password}
        onChange={handleChange}
        error={errors.password}
      />
      <div className="mb-4">
        <label htmlFor="validationCustom04" className="form-label">
          State
        </label>
        <select
          className="form-select"
          id="validationCustom04"
          name="profession"
          value={data.profession}
          onChange={handleChange}
        >
          <option selected disabled value="">
            Choose...
          </option>
          {professions &&
            Object.keys(professions).map((professionName) => (
              <option
                value={professions[professionName]._id}
                key={professions[professionName]._id}
              >
                {professions[professionName].name}
              </option>
            ))}
        </select>
        <div className="invalid-feedback">Please select a valid state.</div>
      </div>
      <button
        className="btn btn-primary w-100 mx-auto"
        type=""
        disabled={!isValid}
      >
        Submit
      </button>
    </form>
  );
};

export default RegisterForm;
