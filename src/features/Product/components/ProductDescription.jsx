import React from 'react';
import PropTypes from 'prop-types';
import { Paper } from '../../../../node_modules/@material-ui/core/index';
import DOMpurify from 'dompurify';

ProductDescription.propTypes = {
  product: PropTypes.object,
};

function ProductDescription({ product = {} }) {
  const safeDescription = DOMpurify.sanitize(product.description);
  return (
    <Paper elevation={0} style={{ padding: '15px' }}>
      <div dangerouslySetInnerHTML={{ __html: safeDescription }} />
    </Paper>
  );
}

export default ProductDescription;
