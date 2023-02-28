import React from 'react';

const Layout = ({children}:any):JSX.Element => {
    return (
        <div className={" flex w-full justify-center"}>
            {children}
        </div>
    );
};

export default Layout;