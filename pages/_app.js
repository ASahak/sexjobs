import React, {useEffect} from 'react'
import DefaultLayout from './_layouts/default';
import injectSheet from 'react-jss';
import 'bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import createStore from 'store/configureStore';
import useDevice from 'hooks/use-media-device';
import {
    setDeviceParams,
} from 'store/actions';
import { createStructuredSelector } from 'reselect';
import {connect} from 'react-redux';
import style from 'static/styles/jss/base/globalStyles';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = (props) => {
    const {Component, pageProps, store} = props;
    const Layout = Component.Layout || DefaultLayout;
    const {deviceSize, deviceType, windowWidth} = useDevice();

    useEffect(() => {
        if (props.deviceParams.deviceSize !== deviceSize || props.deviceParams.deviceType !== deviceType || props.deviceParams.deviceWidth !== windowWidth) {
            props.setDeviceParams({
                deviceSize: deviceSize || 'lg',
                deviceType: deviceType || 'desktop',
                deviceWidth: windowWidth || 1200,
            })
        }
    }, [deviceType, deviceSize, windowWidth, props.deviceParams])

    return (
        <>
            <Provider store={store}>
                <Layout>
                    <Component {...pageProps}/>
                </Layout>
            </Provider>
            <ToastContainer
                position={deviceType === 'desktop'? 'top-right' : 'bottom-center'}
                autoClose={5000}
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable={false}
                pauseOnHover />
        </>
    );
}
App.getInitialProps = async ({ Component, ctx }) => {
    let pageProps = {};
    // Retrieving each page's props
    if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps({ ctx });
    }

    return {
        pageProps: pageProps,
    };
}

const mapStateToProps = createStructuredSelector({
    deviceParams: state => state.base.deviceParams,
    currentLang: state => state.base.currentLang,
    errorMessage: state => state.base.errorMessage,
});
const mapDispatchToProps = (dispatch) => {
    return {
        setDeviceParams: (value) => {
            return dispatch(setDeviceParams(value));
        },
    };
};

export default withRedux(createStore)(connect(
    mapStateToProps,
    mapDispatchToProps,
)(injectSheet(style)(App)));