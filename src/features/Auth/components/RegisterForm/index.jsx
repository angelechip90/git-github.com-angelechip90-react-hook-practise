import { yupResolver } from '@hookform/resolvers/yup';
import { makeStyles } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import { Avatar, Button, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import InputField from '../../../../components/form-control/inputField';
import PasswordField from '../../../../components/form-control/passwordField';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(4),
  },
  avatar: {
    margin: '0px auto',
    backgroundColor: '#dc004e!important',
  },
  title: {
    margin: theme.spacing(5, 0, 3, 0),
    textAlign: 'center',
  },
  submit: {
    margin: '20px 0px!important',
  },
}));

RegisterForm.propTypes = {
  onSubmit: PropTypes.func,
};

RegisterForm.defaultProps = {
  onSubmit: null,
};

function RegisterForm(props) {
  const classes = useStyles();
  // const { onSubmit } = props;
  // const [value, setValue] = useState('');

  // function handleValueChange(e) {
  //     console.log(e.target.value);
  //     setValue(e.target.value);
  // }

  // function handleSubmit(e) {
  //     //chặn reload khi enter
  //     e.preventDefault();
  //     if (!onSubmit) return;

  //     const formValues = {
  //         title: value,

  //     }
  //     onSubmit(formValues);

  //     //reset form
  //     setValue('');
  // }

  const schema = yup.object().shape({
    fullName: yup.string().required('Please enter title').min(5, 'Title is too short'),
    email: yup.string().required('Please enter title').min(5, 'Title is too short'),
    password: yup.string().required('Please enter title').min(5, 'Title is too short'),
    retypePassword: yup.string().required('Please enter title').min(5, 'Title is too short'),
  });

  const form = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      retypePassword: '',
    },
    resolver: yupResolver(schema),
  });

  const handleSubmitForm = (values) => {
    const { onSubmit } = props;
    if (onSubmit) onSubmit(values);
    form.reset();
  };

  return (
    <div className={classes.root}>
      <Avatar className={classes.avatar}>
        <LockOutlined></LockOutlined>
      </Avatar>
      <Typography className={classes.title} component="h3" variant="h5">
        Create An Account
      </Typography>
      <form onSubmit={form.handleSubmit(handleSubmitForm)}>
        <InputField name="fullName" label="Full Name" form={form} />
        <InputField name="email" label="Email" form={form} />
        <PasswordField name="password" label="Password" form={form} />
        <PasswordField name="retypePassword" label="Retype Password" form={form} />
        <Button type="submit" className={classes.submit} variant="contained" color="primary" fullWidth>
          Create an account
        </Button>
      </form>
    </div>
    // <form onSubmit={handleSubmit}>
    //     <label style={{ marginRight: '10px' }}>Input new task:</label> <input type="text" value={value} onChange={handleValueChange} placeholder='Input new task and enter'></input>
    // </form>
  );
}

export default RegisterForm;
