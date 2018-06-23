import * as React from 'react';
import * as Router from 'react-router-dom';

const Header: React.SFC = () => {
    return (
        <div>
            <Router.Link to="/">홈</Router.Link>
            <Router.Link to="/posts">Posts</Router.Link>
            <Router.Link to="/accounts">회원관리</Router.Link>
            <hr />
        </div>
    );
}
  
export default Header;
