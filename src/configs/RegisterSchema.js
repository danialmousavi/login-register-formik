import * as Yup from 'yup';

const RegisterSchema = Yup.object({
  user_name: Yup.string().required('نام کاربری الزامی است'),
  first_name: Yup.string()
    .matches(/^[\u0600-\u06FF\s]+$/, 'نام باید فقط شامل حروف فارسی باشد'),
  last_name: Yup.string()
    .matches(/^[\u0600-\u06FF\s]+$/, 'نام خانوادگی باید فقط شامل حروف فارسی باشد'),

  auth_mode: Yup.string()
    .oneOf(['email', 'mobile'], 'حالت احراز هویت نامعتبر است')
    .required('حالت احراز هویت الزامی است'),

  email: Yup.string().when('auth_mode', {
    is: 'email',
    then: (schema) =>
      schema.email('ایمیل نامعتبر است').required('ایمیل الزامی است'),
    otherwise: (schema) => schema.notRequired(),
  }),

  mobile: Yup.string().when('auth_mode', {
    is: 'mobile',
    then: (schema) =>
      schema
        .matches(/^(09)[0-9]{9}$/, 'شماره موبایل باید با 09 شروع شود و شامل 11 رقم باشد')
        .required('شماره موبایل الزامی است'),
    otherwise: (schema) => schema.notRequired(),
  }),

  password: Yup.string()
    .min(6, 'رمزعبور باید حداقل 6 کاراکتر باشد')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/,
      'رمزعبور باید شامل حروف بزرگ، کوچک و اعداد باشد'
    )
    .required('رمزعبور الزامی است'),

  confirm_password: Yup.string()
    .oneOf([Yup.ref('password'), null], 'رمزعبورها مطابقت ندارند')
    .required('تأیید رمزعبور الزامی است'),

    
    image: Yup.mixed().required().test('fileSize', 'حجم فایل باید کمتر از 2MB باشد', (value) => {
      if (!value) return true; // If no file is selected, skip validation
      const fileSize = value.size / 1024 / 1024; // Convert size to MB
      return fileSize <= 2; // Check if file size is less than or equal to 2MB
    })
});

export default RegisterSchema;
