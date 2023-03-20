import React from 'react';
import Layout from "./components/Layout";
import Home from "./components/home/Home";

const App = (): JSX.Element => {
        return (
            <>
                <Layout className={"flex w-full h-screen "}>
                    <Home/>
                </Layout>

            </>
        );
    }

export default App;
