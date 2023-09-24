import React, { useState } from "react";
import "./styles.css";
function UserForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    address: "",
    email: "",
    birthDate: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    phoneNumber: "",
    address: "",
    email: "",
    birthDate: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const Email = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return emailRegex.test(email);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newErrors = {};

    if (!formData.fullName) {
      newErrors.fullName = "Họ tên không được để trống.";
    }

    if (!formData.phoneNumber) {
      newErrors.phoneNumber = "Số điện thoại không được để trống.";
    }

    if (!formData.address) {
      newErrors.address = "Địa chỉ không được để trống.";
    }

    if (!formData.email) {
      newErrors.email = "Email không được để trống.";
    } else if (!Email(formData.email)) {
      newErrors.email = "Email không đúng định dạng.";
    }

    if (!formData.birthDate) {
      newErrors.birthDate = "Ngày sinh không được để trống.";
    }

    setErrors(newErrors);

    const hasErrors = Object.keys(newErrors).length > 0;

    if (!hasErrors) {
      const userInfo = {
        "Họ tên": formData.fullName,
        "Số điện thoại": formData.phoneNumber,
        "Địa chỉ": formData.address,
        Email: formData.email,
        "Ngày sinh": formData.birthDate,
      };
      alert(JSON.stringify(userInfo, null, 2));
    }
  };

  return (
    <div className="container">
      <h1>Thông tin người dùng</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-container">
          <input
            placeholder="Họ tên"
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
          <p className="error">{errors.fullName}</p>
        </div>
        <div className="form-container">
          <input
            placeholder="Số điện thoại"
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
          <p className="error">{errors.phoneNumber}</p>
        </div>
        <div className="form-container">
          <input
            placeholder="Địa chỉ"
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
          <p className="error">{errors.address}</p>
        </div>
        <div className="form-container">
          <input
            placeholder="Email"
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <p className="error">{errors.email}</p>
        </div>
        <div className="form-container">
          <input
            type="date"
            name="birthDate"
            value={formData.birthDate}
            onChange={handleChange}
          />
          <p className="error">{errors.birthDate}</p>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UserForm;
