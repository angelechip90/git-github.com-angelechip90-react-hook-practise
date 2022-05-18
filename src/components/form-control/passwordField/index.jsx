import FormControl from '@material-ui/core/FormControl';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { TextField } from '@mui/material';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Controller } from 'react-hook-form';

PasswordField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
};

function PasswordField(props) {
  const { form, name, label, disabled } = props;
  const {
    formState,
    formState: { errors },
  } = form;
  const hasError = errors[name] && formState.touchedFields[name];
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword((x) => !x);
  };

  return (
    <div>
      {/* <Controller
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
      /> */}
      <FormControl variant="outlined" fullWidth margin="normal">
        <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
        <Controller
          name={name}
          control={form.control}
          id={name}
          type={showPassword ? 'text' : 'password'}
          label={label}
          endAdornment={
            <InputAdornment position="end">
              <IconButton aria-label="toggle password visibility" onClick={toggleShowPassword} edge="end">
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
    </div>
  );
}

export default PasswordField;
