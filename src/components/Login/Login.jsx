import { useFormik } from 'formik';
import React from 'react';
import LoginSchema from '../../configs/loginSchema';

export default function Login() {
  const formik=useFormik({
    initialValues:{
      email:"",
      password:""
    },
    onSubmit: (values) => {
      console.log('Form submitted:', values);
      // Here you can handle the login logic, e.g., API call
    },
    validationSchema:LoginSchema
  })
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow" style={{ maxWidth: '700px', width: '100%' }}>
        <div className="row g-0">


          <div className="col-md-6 p-4 d-flex flex-column justify-content-center">
            <form onSubmit={formik.handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">آدرس ایمیل</label>
                <input type="email" className={`form-control ${formik.errors.email&&formik.touched.email?"is-invalid":""}`} id="email" placeholder="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.errors.email && formik.touched.email ? (
                  <div className="invalid-feedback">
                    {formik.errors.email}
                  </div>
                ) : null}
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">رمزعبور</label>
                <input type="password" className={`form-control ${formik.errors.password&&formik.touched.password?"is-invalid":""}`} id="password" placeholder="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                {formik.errors.password && formik.touched.password ? (
                  <div className="invalid-feedback">
                    {formik.errors.email}
                  </div>
                ) : null}
              </div>
              <button type="submit" className="btn btn-primary w-100">ورود</button>
            </form>
          </div>

          <div className="col-md-6 d-flex align-items-center justify-content-center bg-primary text-white">
            <h3 className=" text-center">صفحه لاگین</h3>

          </div>
        </div>
      </div>
    </div>
  );
}