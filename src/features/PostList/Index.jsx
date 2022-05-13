import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PostList from './components/PostList';
import Pagination from './components/Pagination';
import queryString from 'query-string';
import PostFilterForm from './components/PostFilterForm';

PostFeatures.propTypes = {

};

function PostFeatures(props) {
    const [postList, setPostList] = useState();
    const [pagination, setPagination] = useState({
        _page: 1,
        _limit: 10,
        _totalRows: 1,
    });
    const [filters, setFilters] = useState({
        _limit: 10,
        _page: 1,
    });


    useEffect(() => {
        async function fetchPostList() {
            //lấy dữ liệu
            try {
                const paramString = queryString.stringify(filters);
                const requestURL = `http://js-post-api.herokuapp.com/api/posts?${paramString}`;
                const response = await fetch(requestURL);
                const responseJSON = await response.json();
                console.log(responseJSON);

                const { data, pagination } = responseJSON;
                setPostList(data);
                setPagination(pagination);

            } catch (error) {
                console.log('Failed to fetch post list', error.message);
            }

        }

        fetchPostList();
    }, [filters]);



    function handlePageChange(newPage) {
        console.log('New page', newPage);
        setFilters({
            ...filters,
            _page: newPage,
        })
    }

    function handleFilterChange(newFilters) {
        console.log('New Filter:', newFilters);
        setFilters({
            ...filters,
            _page: 1,
            title_like: newFilters.searchTerm,
        })
    }



    return (
        <div>
            <h2>Post List</h2>
            <PostFilterForm onSubmit={handleFilterChange} />
            <PostList posts={postList} />
            <Pagination pagination={pagination} onPageChange={handlePageChange} />
        </div>
    );
}

export default PostFeatures;