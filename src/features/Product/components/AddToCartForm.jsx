import { makeStyles } from '@material-ui/core';
import { Button } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import InputField from '../../../components/form-control/inputField/index';
import QuantityField from '../../../components/form-control/quantityField/index';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
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
  button: {
    marginTop: '10px!important',
  },
}));
AddToCartForm.propTypes = {
  onSubmit: PropTypes.func,
};

function AddToCartForm({ onSubmit = null }) {
  const classes = useStyles();

  const schema = yup.object().shape({
    quantity: yup
      .number()
      .required('Please enter quantity')
      .min(1, 'Minimum value is 1')
      .typeError('Please enter a number'),
  });
  const form = useForm({
    defaultValues: {
      quantity: 1,
    },
    resolver: yupResolver(schema),
  });

  const handleSubmit = async (values) => {
    if (onSubmit) {
      await onSubmit(values);
    }
  };

  return (
    <form onSubmit={form.handleSubmit(handleSubmit)} className={classes.root}>
      <QuantityField name="quantity" label="Quantity" form={form} />

      <Button type="submit" variant="contained" color="primary" fullWidth className={classes.button}>
        Buy
      </Button>
    </form>
  );
}

export default AddToCartForm;
