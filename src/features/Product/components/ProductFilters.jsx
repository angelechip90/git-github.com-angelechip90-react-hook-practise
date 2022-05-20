import React from 'react';
import PropTypes from 'prop-types';
import FilterByCategory from './Filters/FilterByCategory';
import { Box } from '@mui/material';
import FilterByPrice from './Filters/FilterByPrice';
import FilterByService from './Filters/FilterByService';

ProductFilters.propTypes = {
  filters: PropTypes.object.isRequired,
  onChange: PropTypes.func,
};

function ProductFilters({ filters, onChange }) {
  const handleCategoryChange = (newCategoryID) => {
    if (!onChange) return;
    if (newCategoryID > 0) {
      const newFilters = {
        'category.id': newCategoryID,
      };
      onChange(newFilters);
    } else {
      const newFilters = { ...filters };
      delete newFilters['category.id'];
      onChange(newFilters);
    }
  };
  const handleChange = (values) => {
    if (!onChange) return;
    onChange(values);
  };

  return (
    <Box>
      <FilterByCategory onChange={handleCategoryChange} />
      <FilterByPrice onChange={handleChange} />
      <FilterByService filters={filters} onChange={handleChange} />
    </Box>
  );
}

export default ProductFilters;
