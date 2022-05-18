import React from 'react';
import PropTypes from 'prop-types';

import { Controller } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { TextField } from '@mui/material';

InputField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
};

function InputField(props) {
  const { form, name, label, disabled } = props;
  const {
    formState,
    formState: { errors },
  } = form;
  const hasError = errors[name] && formState.touchedFields[name];

  return (
    <div>
      <Controller
        render={({ field: { onChange, onBlur, value, name, ref } }) => (
          <TextField
            value={value}
            onChange={onChange} // send value to hook form
            onBlur={onBlur} // notify when input is touched
            label={label}
            disabled={disabled}
            error={!!hasError}
            helperText={errors[name]?.message}
            variant="outlined"
            margin="normal"
            fullWidth
          />
        )}
        name={name}
        control={form.control}
        rules={{ required: true }}
      />
    </div>
  );
}

export default InputField;
