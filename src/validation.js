import * as yup from 'yup';

export const Validation = yup.object().shape({
    firstname: yup.string().required(),
    lastname: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(2).required(),
    confirmpassword: yup.string().min(2).required(),
})
 