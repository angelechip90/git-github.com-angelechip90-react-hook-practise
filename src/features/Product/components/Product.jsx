import { Typography } from '@material-ui/core/index';
import { Box } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { useHistory } from '../../../../node_modules/react-router-dom/cjs/react-router-dom.min';
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from '../../../constants/index';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    cursor: 'pointer',
  },
}));

Product.propTypes = {
  product: PropTypes.object,
};

function Product({ product }) {
  const classes = useStyles();

  //?. nếu có dữ liệu thì trả về cái sau chấm còn không thì trả về null
  const thumbnailURL = product.thumbnail ? `${STATIC_HOST}${product.thumbnail?.url}` : THUMBNAIL_PLACEHOLDER;

  const history = useHistory();

  const handleClick = () => {
    history.push(`/products/${product.id}`);
  };

  return (
    <div>
      <Box className={classes.root} padding={1} minHeight="300px" onClick={handleClick}>
        <Box padding={1}>
          <img src={thumbnailURL} alt={product.name} width="100%" />
        </Box>

        <Typography variant="body1">{product.name}</Typography>
        <Typography variant="body2">
          <Box component="span" fontSize="16px" fontWeight="bold" mr={1}>
            {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.salePrice)}
          </Box>
          {product.promotionPercent > 0 ? ` -${product.promotionPercent}%` : ''}
        </Typography>
      </Box>
    </div>
  );
}

export default Product;
