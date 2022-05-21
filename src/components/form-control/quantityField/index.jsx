import IconButton from '@material-ui/core/IconButton';
import { TextField } from '@mui/material';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Controller } from 'react-hook-form';
import { Box } from '../../../../node_modules/@material-ui/core/index';
import { AddCircleOutline, RemoveCircleOutline } from '../../../../node_modules/@mui/icons-material/index';

QuantityField.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,

  label: PropTypes.string,
  disabled: PropTypes.bool,
};

function QuantityField(props) {
  const { form, name, label, disabled } = props;
  const { value, setValue } = form;
  const {
    //formState,
    formState: { errors },
  } = form;

  //const hasError = errors[name] && formState.touchedFields[name];
  const hasError = errors[name];
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword((x) => !x);
  };

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);

  return (
    <div>
      <Controller
        render={({ field: { onChange, onBlur, value, name, ref } }) => (
          <Box>
            <IconButton onClick={() => setValue(name, Number.parseInt(value) ? Number.parseInt(value) - 1 : 1)}>
              <RemoveCircleOutline />
            </IconButton>

            <TextField
              value={value}
              onChange={onChange} // send value to hook form
              onBlur={onBlur} // notify when input is touched
              label={label}
              disabled={disabled}
              error={!!hasError}
              helperText={errors[name]?.message}
              type="number"
            />
            <IconButton onClick={() => setValue(name, Number.parseInt(value) ? Number.parseInt(value) + 1 : 1)}>
              <AddCircleOutline />
            </IconButton>
          </Box>
        )}
        name={name}
        control={form.control}
        rules={{ required: true }}
      />
      {/* <FormControl variant="outlined" fullWidth margin="normal">
        <InputLabel htmlFor="outlined-adornment-password">{label}</InputLabel>
        <OutlinedInput
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
      </FormControl> */}
    </div>
  );
}

export default QuantityField;
