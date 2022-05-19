import React from 'react';
import PropTypes from 'prop-types';
import { Container, Grid, makeStyles, Paper } from '@material-ui/core';
import { Box } from '@mui/material';
import { array } from '../../../../node_modules/yup/lib/locale';
import { Skeleton } from '@mui/material/index';

ProductSkeletonList.propTypes = {
  length: PropTypes.number,
};
ProductSkeletonList.defaultProps = {
  length: 6,
};

function ProductSkeletonList(length) {
  return (
    <div>
      <Box>
        <Grid container>
          {Array.from(new Array(length)).map((x, index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              <Box padding={1}>
                <Skeleton variant="rectangular" width="100%" height={118}></Skeleton>
                <Skeleton width="60%" />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}

export default ProductSkeletonList;
