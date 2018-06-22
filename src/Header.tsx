import * as React from 'react';
import * as Router from 'react-router-dom';

const Header: React.SFC = () => {
    return (
        <div>
            <Router.Link to="/">홈</Router.Link>
            <Router.Link to="/posts">Posts</Router.Link>
            <hr />
        </div>
    );
}
  
export default Header;
