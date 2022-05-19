import { Container, Grid, makeStyles, Paper } from '@material-ui/core';
import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Pagination } from '@mui/material';
import productAPI from '../../../api/productAPI';
import ProductList from '../components/ProductList';
import ProductSkeletonList from '../components/ProductSkeletonList';

ListPage.propTypes = {};

const useStyles = makeStyles((theme) => ({
  root: {},

  left: {
    width: '250px',
  },

  right: {
    flex: '1 1 0',
  },
}));

function ListPage(props) {
  const classes = useStyles();
  const [productList, setProductList] = useState([]);
  const [pagination, setPagination] = useState({
    limit: 9,
    total: 10,
    page: 1,
  });
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    _page: 1,
    _limit: 9,
  });

  useEffect(() => {
    (async () => {
      try {
        const { data, pagination } = await productAPI.getAll(filters);
        setProductList(data);
        setPagination(pagination);
      } catch (error) {
        console.log('Fail to load Product List', error);
      }
      setLoading(false);
    })();
  }, [filters]);

  const handlePageChange = (e, page) => {
    setFilters((preFilters) => ({
      ...preFilters,
      _page: page,
    }));
  };

  return (
    <Box>
      <Container>
        <Grid container spacing={1}>
          <Grid item className={classes.left}>
            <Paper elevation={0}>Left Column</Paper>
          </Grid>
          <Grid item className={classes.right}>
            <Paper elevation={0}>
              {loading ? <ProductSkeletonList length={9} /> : <ProductList data={productList} />}

              <Pagination
                count={Math.ceil(pagination.total / pagination.limit)}
                color="primary"
                page={pagination.page}
                onChange={handlePageChange}
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ListPage;
