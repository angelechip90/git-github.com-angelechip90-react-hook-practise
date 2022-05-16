import React from 'react';
import { Route } from 'react-router-dom';
import { Switch, useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';
import NotFound from '../../components/NotFound';
import DetailPage from './pages/DetailPage';
import ListPage from './pages/ListPage';

TodoListFeature.propTypes = {

};

function TodoListFeature(props) {
    const math = useRouteMatch();
    return (
        <div>
            <Switch>
                <Route path={math.path} component={ListPage} exact />
                <Route path={`${math.path}/:todoID`} component={DetailPage} exact />

                <Route component={NotFound} />
            </Switch>
        </div>
    );
}

export default TodoListFeature;