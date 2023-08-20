
export default function validate(values){
    let errors={};
    const p=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(!values.username.trim())
    {
        errors.username="username not valid"
    }
    if(!values.email.trim()){
        errors.email="email requires"
    }
    else if(!p.test(values.email)){
        errors.email="entered email is not valid"
    }
    if(!values.password.trim()){
        errors.password='password required'
    }
    else if(values.password.length < 6)
    {
        errors.password='password must be 6 character'
    }
    if(values.password!=values.password2){
        errors.password2=' pasword do not match'
    }
    return errors;
}