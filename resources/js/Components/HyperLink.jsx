import React from 'react';
import { Link } from 'react-router-dom';

const Hyperlink = ({ to, children, ...props}) => {
    return (
        <Link
            to={to}
            {...props}
        >
            {children}
        </Link>
    );
};

export default Hyperlink;
