import React from 'react';
import { Field, reduxForm } from 'redux-form';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const renderTextField = (
  { input, label, meta: { touched, error }, ...custom },
) => (
  <TextField
    hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
  />
);

const LoginForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  const style = { margin: 2,};
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          name="loginName"
          component={renderTextField}
          label="Username"
        />
      </div>
      <div>
        <Field name="password" component={renderTextField} label="Password" type="password" />
      </div>
      <div>
        <br/>
        <RaisedButton label="Login" primary={true} disabled={pristine || submitting} />
        <RaisedButton label="Clear Values" secondary={true}  disabled={pristine || submitting}/>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'LoginForm' // a unique identifier for this form
})(LoginForm);
