import { Box } from '@mui/material';
import React from 'react';
import { useRouteMatch } from '../../../node_modules/react-router-dom/cjs/react-router-dom.min';
import { Route, Switch } from '../../../node_modules/react-router-dom/index';
import DetailPage from './pages/DetailPage';
import ListPage from './pages/ListPage';

ProductFeature.propTypes = {};

function ProductFeature(props) {
  const math = useRouteMatch();
  return (
    <Box pt={4}>
      <Switch>
        <Route path={math.url} exact component={ListPage} />
        <Route path={`${math.url}/:productId`} component={DetailPage} />
      </Switch>
    </Box>
  );
}

export default ProductFeature;
