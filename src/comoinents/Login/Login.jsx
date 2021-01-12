import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { required } from "../../utils/validators/validators";
import { Input } from "../common/FormsControls/FormsControls";
import { login } from "../../redux/auth-reduser";
import { Redirect } from "react-router-dom";
import Class from "./Login.module.css";
import Style from "./../common/FormsControls/FormsControls.module.css";

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={Class.box}>
                <Field placeholder={"Email"} component={Input} name={"email"} validate={[required]} />
            </div>
            <div className={Class.box}>
                <Field placeholder={"Password"} type="password" component={Input} name={"password"} validate={[required]} />
            </div>
            <div className={Class.box}>
                <Field type="checkbox" component={Input} name={"rememberMe"} />remember me
            </div>
            {props.error && <div className={Style.boxFormSummaryError}>
                <span className={Style.formSummaryError}>
                    {props.error}
                </span>
            </div>}

            <div className={Class.box}>
                <button>Login</button>
            </div>
        </form >
    )

}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={"/profile/"} />
    }
    return (
        <div className={Class.login}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.Auth.isAuth
    }
}

export default connect(mapStateToProps, { login })(Login)