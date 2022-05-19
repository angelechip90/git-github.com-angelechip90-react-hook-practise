import { Grid } from '@material-ui/core';
import { Box } from '@mui/material';
import { Skeleton } from '@mui/material/index';
import PropTypes from 'prop-types';
import React from 'react';
import Product from './Product';

ProductList.propTypes = {
  data: PropTypes.array,
};
ProductList.defaultProps = {
  data: [],
};

function ProductList({ data = [] }) {
  return (
    <div>
      <Box>
        <Grid container>
          {data.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Product product={product} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}

export default ProductList;
