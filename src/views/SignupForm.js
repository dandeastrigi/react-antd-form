import React from 'react'
import { Form, Field, useField } from "react-final-form";
import AntdInput from './AntdInput'
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const onSubmit = async values => {
  await sleep(300);
  window.alert(JSON.stringify(values, 0, 2));
};

const Error = ({ name }) => {
  const {
    meta: { touched, error }
  } = useField(name, { subscription: { touched: true, error: true } });
  return touched && error ? <span>{error}</span> : null;
};

export class SignupForm extends React.Component {
    render() {
        return <div className="signupForm">
            <h2>Formulário de cadastro</h2>
            <Form
                onSubmit={onSubmit}
                validate={values => {
                    const errors = {}
                    if (!values.username) {
                    errors.username = 'Required'
                    }
                    
                    return errors
                }}
                render={({ handleSubmit, form, submitting, pristine, values }) => (
                    <form onSubmit={handleSubmit}>
                    <Field name="username">
                        {({ input, meta }) => (
                        <div>
                            <label>Username</label>
                            <input {...input} type="text" placeholder="Username" />
                            {meta.error && meta.touched && <span>{meta.error}</span>}
                        </div>
                        )}
                    </Field>
                    <div className="buttons">
                        <button type="submit" disabled={submitting}>
                        Submit
                        </button>
                        <button
                        type="button"
                        onClick={form.reset}
                        disabled={submitting || pristine}
                        >
                        Reset
                        </button>
                    </div>
                    <pre>{JSON.stringify(values, 0, 2)}</pre>
                    </form>
                )}
            />
        </div>
    }
}

export default SignupForm;