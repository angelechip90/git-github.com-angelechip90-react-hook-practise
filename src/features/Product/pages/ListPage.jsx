import { Container, Grid, makeStyles, Paper } from '@material-ui/core';
import { Box } from '@mui/material';
import React from 'react';
import { useEffect } from 'react';
import { Skeleton } from '@mui/material/index';
import productAPI from '../../../api/productAPI';
import { useState } from 'react';
import ProductSkeletonList from '../components/ProductSkeletonList';
import { Typography } from '../../../../node_modules/@material-ui/core/index';

ListPage.propTypes = {};

const useStyles = makeStyles((theme) => ({
  root: {},

  left: {
    width: '250px',
  },

  right: {
    flex: '1 1 auto',
  },
}));

function ListPage(props) {
  const classes = useStyles();
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await productAPI.getAll({ _page: 1, _limit: 10 });
        setProductList(data);
      } catch (error) {
        console.log('Fail to load Product List', error);
      }
      //setLoading(false);
    })();
  });
  return (
    <Box>
      <Container>
        <Grid container spacing={1}>
          <Grid item className={classes.left}>
            <Paper elevation={0}>Left Column</Paper>
          </Grid>
          <Grid item className={classes.right}>
            <Paper elevation={0}>{loading ? <ProductSkeletonList /> : <Typography>Product List</Typography>}</Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ListPage;
