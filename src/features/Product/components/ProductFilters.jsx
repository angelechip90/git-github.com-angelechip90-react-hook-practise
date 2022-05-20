import React from 'react';
import PropTypes from 'prop-types';
import FilterByCategory from './Filters/FilterByCategory';
import { Box } from '@mui/material';
import FilterByPrice from './Filters/FilterByPrice';

ProductFilters.propTypes = {
  filters: PropTypes.object.isRequired,
  onChange: PropTypes.func,
};

function ProductFilters({ filters, onChange }) {
  const handleCategoryChange = (newCategoryID) => {
    if (!onChange) return;
    const newFilters = {
      'category.id': newCategoryID,
    };
    onChange(newFilters);
  };
  const handlePriceChange = (values) => {
    if (!onChange) return;
    onChange(values);
  };

  return (
    <Box>
      <FilterByCategory onChange={handleCategoryChange} />
      <FilterByPrice onChange={handlePriceChange} />
    </Box>
  );
}

export default ProductFilters;
