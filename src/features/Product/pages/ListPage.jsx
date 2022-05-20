import { Container, Grid, makeStyles, Paper } from '@material-ui/core';
import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Pagination } from '@mui/material';
import productAPI from '../../../api/productAPI';
import ProductList from '../components/ProductList';
import ProductSkeletonList from '../components/ProductSkeletonList';
import ProductSort from '../components/ProductSort';
import ProductFilters from '../components/ProductFilters';

ListPage.propTypes = {};

const useStyles = makeStyles((theme) => ({
  root: {},

  left: {
    width: '250px',
  },

  right: {
    flex: '1 1 0',
  },

  pagination: {
    display: 'flex',
    flex: 'row nowrap',
    justifyContent: 'center',
    marginTop: '20px',
    paddingBottom: '20px',
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
    _sort: 'salePrice:ASC',
  });

  useEffect(() => {
    (async () => {
      try {
        const { data, pagination } = await productAPI.getAll(filters);
        setProductList(data);
        setPagination(pagination);
        console.log(data);
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
  const handleSortChange = (newSortValue) => {
    setFilters((preFilters) => ({
      ...preFilters,
      _sort: newSortValue,
    }));
  };
  const handleFilterChange = (newFilter) => {
    setFilters((preFilters) => ({
      ...preFilters,
      ...newFilter,
    }));
  };

  return (
    <Box>
      <Container>
        <Grid container spacing={1}>
          <Grid item className={classes.left}>
            <Paper elevation={0}>
              <ProductFilters filters={filters} onChange={handleFilterChange} />
            </Paper>
          </Grid>
          <Grid item className={classes.right}>
            <Paper elevation={0}>
              <ProductSort currentSort={filters._sort} onChange={handleSortChange} />
              {loading ? <ProductSkeletonList length={9} /> : <ProductList data={productList} />}
              <Box className={classes.pagination}>
                <Pagination
                  count={Math.ceil(pagination.total / pagination.limit)}
                  color="primary"
                  page={pagination.page}
                  onChange={handlePageChange}
                />
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ListPage;
