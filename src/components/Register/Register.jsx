import { useFormik } from 'formik';
import React from 'react';
import RegisterSchema from '../../configs/RegisterSchema';

export default function Register() {
  const formik=useFormik({
    initialValues:{
      user_name:"",
      first_name:"",
      last_name:"",
      email:"",
      mobile:"",
      password:"",
      confirm_password:"",
      auth_mode:"mobile",
      image:null
    },
    onSubmit: (values) => {
      console.log('Form submitted:', values);
      // Here you can handle the login logic, e.g., API call
    },
    validationSchema:RegisterSchema
  })
  console.log(formik);
  
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow" style={{ maxWidth: '1000px', width: '100%' }}>
        <div className="row g-0">


          <div className="col-md-6 p-4 d-flex flex-column justify-content-center">
            <form onSubmit={formik.handleSubmit}>
              {/* user_name */}
              <div className="mb-3">
                <label htmlFor="user_name" className="form-label">نام کاربری</label>
                <input type="text" className={`form-control ${formik.errors.user_name&&formik.touched.user_name?"is-invalid":""}`} id="user_name" placeholder="user_name" value={formik.values.user_name} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.errors.user_name && formik.touched.user_name ? (
                  <div className="invalid-feedback">
                    {formik.errors.user_name}
                  </div>
                ) : null}
              </div>
                {/* first_name */}
              <div className="mb-3">
                <label htmlFor="first_name" className="form-label">نام کاربری</label>
                <input type="text" className={`form-control ${formik.errors.first_name&&formik.touched.first_name?"is-invalid":""}`} id="first_name" placeholder="first_name" value={formik.values.first_name} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.errors.first_name && formik.touched.first_name ? (
                  <div className="invalid-feedback">
                    {formik.errors.first_name}
                  </div>
                ) : null}
              </div>
              {/* last_name */}
              <div className="mb-3">
                <label htmlFor="last_name" className="form-label">نام خانوادگی</label>
                <input type="text" className={`form-control ${formik.errors.last_name&&formik.touched.last_name?"is-invalid":""}`} id="last_name" placeholder="last_name" value={formik.values.last_name} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.errors.last_name && formik.touched.last_name ? (
                  <div className="invalid-feedback">
                    {formik.errors.last_name}
                  </div>
                ) : null}
              </div>
              {/* auth_mode */}
              <div className="mb-3">
                <label className="form-label">حالت احراز هویت</label><br />
                <div className="form-check form-check-inline">
                  <input
                    className={`form-check-input ${formik.errors.auth_mode && formik.touched.auth_mode ? "is-invalid" : ""}`}
                    type="radio"
                    name="auth_mode"
                    id="mobilephone"
                    value="mobile"
                    checked={formik.values.auth_mode === "mobile"}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <label className="form-check-label" htmlFor="mobilephone">موبایل</label>
                </div>
                <div className="form-check form-check-inline">
                  <input
                    className={`form-check-input ${formik.errors.auth_mode && formik.touched.auth_mode ? "is-invalid" : ""}`}
                    type="radio"
                    name="auth_mode"
                    id="emailId"
                    value="email"
                    checked={formik.values.auth_mode === "email"}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <label className="form-check-label" htmlFor="emailId">ایمیل</label>
                </div>
                {formik.errors.auth_mode && formik.touched.auth_mode ? (
                  <div className="invalid-feedback d-block">
                    {formik.errors.auth_mode}
                  </div>
                ) : null}
              </div>
              {formik.values.auth_mode === "email" ?(
                <>
              <div className="mb-3">
                  <label htmlFor="email" className="form-label">آدرس ایمیل</label>
                  <input type="email" className={`form-control ${formik.errors.email&&formik.touched.email?"is-invalid":""}`} id="email" placeholder="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                  {formik.errors.email && formik.touched.email ? (
                    <div className="invalid-feedback">
                      {formik.errors.email}
                    </div>
                  ) : null}
              </div>
                </>

              ):(
                <>
              <div className="mb-3">
                <label htmlFor="mobile" className="form-label">شماره موبایل</label>
                <input type="text" className={`form-control ${formik.errors.mobile&&formik.touched.mobile?"is-invalid":""}`} id="mobile" placeholder="mobile" value={formik.values.mobile} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.errors.mobile && formik.touched.mobile ? (
                  <div className="invalid-feedback">
                    {formik.errors.mobile}
                  </div>
                ) : null}
              </div>
                </>
              )}
            {/* password */}
              <div className="mb-3">
                <label htmlFor="password" className="form-label">رمزعبور</label>
                <input type="password" className={`form-control ${formik.errors.password&&formik.touched.password?"is-invalid":""}`} id="password" placeholder="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.errors.password && formik.touched.password ? (
                  <div className="invalid-feedback">
                    {formik.errors.password}
                  </div>
                ) : null}
              </div>
              {/* confirm password */}
              <div className="mb-3">
                <label htmlFor="confirm_password" className="form-label">رمزعبور</label>
                <input type="password" className={`form-control ${formik.errors.confirm_password&&formik.touched.confirm_password?"is-invalid":""}`} id="confirm_password" placeholder="confirm_password" value={formik.values.confirm_password} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.errors.confirm_password && formik.touched.confirm_password ? (
                  <div className="invalid-feedback">
                    {formik.errors.confirm_password}
                  </div>
                ) : null}
              </div>
              {/* image upload */}
              <div className="mb-3">
                <label htmlFor="image" className="form-label">آپلود تصویر</label>
                <input type="file" className={`form-control ${formik.errors.image&&formik.touched.image?"is-invalid":""}`} id="image" placeholder="image" onChange={(event) => {
                  formik.setFieldValue("image", event.target.files[0]);
                }} onBlur={formik.handleBlur} />
                {formik.errors.image && formik.touched.image ? (
                  <div className="invalid-feedback">
                    {formik.errors.image}
                  </div>
                ) : null}
              </div>
              <button type="submit" className="btn btn-primary w-100">ورود</button>
            </form>
          </div>

          <div className="col-md-6 d-flex align-items-center justify-content-center bg-primary text-white">
            <h3 className=" text-center">صفحه ثبت نام</h3>

          </div>
        </div>
      </div>
    </div>
  );
}