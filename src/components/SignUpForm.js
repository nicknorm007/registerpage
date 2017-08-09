import React from 'react';
import { Field, reduxForm } from 'redux-form';
import TextField from 'material-ui/TextField';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import Checkbox from 'material-ui/Checkbox';
import SelectField from 'material-ui/SelectField';
import asyncValidate from '../validators/asyncValidate';
import validate from '../validators/validate';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardText } from 'material-ui/Card';
import injectTapEventPlugin from 'react-tap-event-plugin';


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

const renderCheckbox = ({ input, label }) => (
  <Checkbox
    label={label}
    checked={input.value ? true : false}
    onCheck={input.onChange}
  />
);

const renderRadioGroup = ({ input, ...rest }) => (
  <RadioButtonGroup
    {...input}
    {...rest}
    valueSelected={input.value}
    onChange={(event, value) => input.onChange(value)}
  />
);

const SignUpForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  const style = { margin: 2,};
  return (
    <form>
      <div>
        <Field
          name="firstName"
          component={renderTextField}
          label="First Name"
        />
      </div>
      <div>
        <Field name="lastName" component={renderTextField} label="Last Name" />
      </div>
      <div>
        <Field name="email" component={renderTextField} label="Email" />
        <br/>
      </div>
      <div>
        <Field name="sex" component={renderRadioGroup}>
          <RadioButton value="male" label="Male" />
          <RadioButton value="female" label="Female" />
        </Field>
      </div>
      <div>
        <Field name="employed" component={renderCheckbox} label="Employed" />
      </div>
      <div>
        <Field
          name="notes"
          component={renderTextField}
          label="Notes"
          multiLine={true}
          rows={2}
        />
      </div>
      <div>
        <br/>
        <RaisedButton label="Submit" primary={true} disabled={pristine || submitting} onClick={handleSubmit} />
        <RaisedButton label="Clear Values" secondary={true}  disabled={pristine || submitting} onClick={reset}/>
      </div>
    </form>
  );
};
injectTapEventPlugin();
export default reduxForm({
  form: 'SignUpForm', // a unique identifier for this form
  validate,
  asyncValidate,
})(SignUpForm);
