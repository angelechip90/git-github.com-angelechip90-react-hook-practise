import { makeStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { Box, Typography } from '../../../../../node_modules/@material-ui/core/index';
import categoryAPI from '../../../../api/categoryAPI';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  menu: {
    padding: 0,
    margin: 0,
    listStyleType: 'none',
    '& > li': {
      marginTop: theme.spacing(1),
      trasition: 'all .25s',
      '&:hover': {
        cursor: 'pointer',
        color: theme.palette.primary.dark,
        fontWeight: 'bold',
      },
    },
  },
}));

FilterByCategory.propTypes = {
  onChange: PropTypes.func,
};

function FilterByCategory({ onChange }) {
  const [categoryList, setCategoryList] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    (async () => {
      try {
        const list = await categoryAPI.getAll();
        setCategoryList(
          list.map((x) => ({
            id: x.id,
            name: x.name,
          }))
        );
      } catch (error) {
        console.log('Fail to get CategoryList', error);
      }
    })();
  }, []);

  const handleCategoryClick = (category) => {
    if (onChange) onChange(category === null ? '0' : category.id);
  };

  return (
    <Box className={classes.root}>
      <Typography variant="subtitle2">DANH MỤC SẢN PHẨM</Typography>
      <ul className={classes.menu}>
        <li key="0" onClick={() => handleCategoryClick(null)}>
          <Typography variant="body2"> Tất cả</Typography>
        </li>
        {categoryList.map((category) => (
          <li key={category.id} onClick={() => handleCategoryClick(category)}>
            <Typography variant="body2"> {category.name}</Typography>
          </li>
        ))}
      </ul>
    </Box>
  );
}

export default FilterByCategory;
