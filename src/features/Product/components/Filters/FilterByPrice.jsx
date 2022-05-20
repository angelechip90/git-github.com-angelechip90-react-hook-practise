import { Box, Button, Typography } from '@material-ui/core/index';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles((theme) => ({
  root: {
    borderTop: `1px solid ${theme.palette.grey[300]}`,
    padding: theme.spacing(2),
  },
  range: {
    display: 'flex',
    flex: 'row nowrap',
    alignItems: 'center',
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    '& > span': {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
  },
}));

FilterByPrice.propTypes = {
  onChange: PropTypes.func,
};

function FilterByPrice({ onChange }) {
  const classes = useStyle();
  const [values, setValues] = useState({
    salePrice_gte: 0,
    salePrice_lte: 0,
  });

  const handeChange = (e) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log(values);
    if (onChange) onChange(values);

    setValues({ salePrice_gte: 0, salePrice_lte: 0 });
  };

  return (
    <Box className={classes.root}>
      <Typography variant="subtitle2">GIÁ</Typography>
      <Box className={classes.range}>
        <TextField name="salePrice_gte" variant="standard" value={values.salePrice_gte} onChange={handeChange} />
        <span>-</span>
        <TextField name="salePrice_lte" variant="standard" value={values.salePrice_lte} onChange={handeChange} />
      </Box>
      <Button size="small" variant="outlined" color="primary" onClick={handleSubmit}>
        Áp dụng
      </Button>
    </Box>
  );
}

export default FilterByPrice;
