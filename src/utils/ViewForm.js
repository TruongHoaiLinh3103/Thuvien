import * as yup from "yup";

export const regisScheme = yup.object().shape({
    user: yup.string().required(),
    email : yup.string().email().required().matches(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/),
    password: yup.string().min(4).max(20).required(),
});

export const loginScheme = yup.object().shape({
    user: yup.string().required(),
    password: yup.string().min(4).max(20).required(),
});

export const changePassScheme = yup.object().shape({
    user: yup.string().required(),
    oldPassword: yup.string().min(4).max(20).required(),
    newPassword: yup.string().min(4).max(20).required(),
});

export const contactForm = yup.object().shape({
    fullname: yup.string().required(),
    email : yup.string().email().required().matches(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/),
    content: yup.string().required(),
    telephone: yup.string().required().matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/),
    title: yup.string().min(1).max(100).required()
})