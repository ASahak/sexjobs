import React from 'react'
import App from 'next/app';
import DefaultLayout from './_layouts/default';
import injectSheet from 'react-jss';
import 'bootstrap/dist/css/bootstrap.css';

const style = {
    '@global': {
        'a': {
            textDecoration: 'none !important',
        },
        'body': {
            height: '2000px'
        },
        'body, *': {
            margin: '0px',
            boxSizing: 'border-box',
            fontFamily: 'Arial',
        },
        'main': {
            flex: '1 0 auto',
            paddingTop: '16px',
            paddingBottom: '16px',
        },
        '#__next': {
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
        }
    }
};

class Layout extends App {
    componentDidMount() {
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }

    render() {
        const { Component, pageProps } = this.props;
        const Layout = Component.Layout || DefaultLayout;
        return (
            <>
                <Layout>
                    <Component {...pageProps}/>
                </Layout>
            </>
        );
    }
}

export default injectSheet(style)(Layout);