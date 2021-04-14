import React, {useState, useMemo, useEffect, useRef, useCallback} from 'react';
import UseStyles from './styles';
import PropTypes from 'prop-types';
import MainOrSubPage from './components/MainOrSubPage';
import LikeDialog from './components/LikeDialog';
import {baseSelector} from 'store/reselect';
import {useSelector} from 'react-redux';
// import Chat from './components/Chat';

const iconSize = 20;
const iconMargin = 20;

const MySJBar = (props) => {
    const [historyPaths, setHistoryPaths] = useState([]);
    const baseState = useSelector(baseSelector());
    const deviceParams = baseState.deviceParams;

    const [paddingMainWrap, setPaddingMainWrap] = useState(15);
    const [titleMinusWidth, setTitleMinusWidth] = useState(0);

    const styles = UseStyles({
        fontSize: iconSize,
        iconMargin,
        titleMinusWidth: `calc(100% - ${titleMinusWidth}px)`,
        paddingWrapper: `${paddingMainWrap}px`,
    }, {link: true});
    const mainBarRef = useRef();

    const mainSubProps = useCallback(() => {
        return {
            deviceParams: deviceParams,
            type: props.type,
            overflow: props.overflow,
            iconMargin: iconMargin,
            iconSize: iconSize,
            mainBarRef: mainBarRef,
            title: props.title,
            paddingMainWrap: paddingMainWrap,
            options: props.options,
            emitOptionsWidth:(v) => setTitleMinusWidth(+v + 10)
        }
    }, [
        props,
        iconMargin,
        iconSize,
        mainBarRef,
        paddingMainWrap]);

    const Component = useMemo(() => {
        return {
            main: <MainOrSubPage {...mainSubProps()}/>,
            sub: <MainOrSubPage
                {...mainSubProps()} goBack={() => {
                if (!props.history) {
                    props.goBack();
                } else {
                    setHistoryPaths(prevState => ([...prevState.filter(e => e !== props.history)]))
                }
            }}/>,
            'like-dialog': <LikeDialog
                saveAction={props.dialogSave}
                title={props.title}
                onClose={() => {
                    setHistoryPaths([]);
                    props.onCloseLikeDialog()
                }}
                onSave={() => {
                    setHistoryPaths([]);
                    props.onSaveLikeDialog()
                }} />,
            // chat: <Chat />,
        }
    }, [props, paddingMainWrap, mainBarRef, props.history, historyPaths]);

    useEffect(() => {
        const {deviceType} = deviceParams;
        if (deviceType === 'mobile') setPaddingMainWrap(15);
        else setPaddingMainWrap(30);
    }, [deviceParams]);

    useEffect(() => {
        historyPaths.length && props.goBack?.(historyPaths.slice(-1)[0] || '')
    }, [historyPaths])

    useEffect(() => {
        if (props.history) {
            if (historyPaths.indexOf(props.history) === -1) {
                setHistoryPaths(prevState => prevState.concat(props.history))
            }
        } else {
            setHistoryPaths([])
        }
    }, [props.history]);

    return (
        <div className={`sj-bar-with-options ${props.type + '-sj-bar'} ${styles['main-bar']} ${props.overflow ? 'completable-sj-bar' : 'not-overflow-bar'} with-mobile-shadow ${!props.options ? 'no-options' : ''}`} ref={mainBarRef}>
            {Component[props.type]}
        </div>
    )
}

MySJBar.defaultProps = {
    overflow: true,
    onCloseLikeDialog: () => void(0),
    onSaveLikeDialog: () => void(0),
    dialogSave: true,
};
MySJBar.propTypes = {
    options: PropTypes.object,
    history: PropTypes.string,
    goBack: PropTypes.func,
    dialogSave: PropTypes.bool,
    overflow: PropTypes.bool,
    title: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['main', 'sub', 'like-dialog', 'chat']).isRequired,
    onCloseLikeDialog: PropTypes.func,
    onSaveLikeDialog: PropTypes.func,
};

export default React.memo(MySJBar);