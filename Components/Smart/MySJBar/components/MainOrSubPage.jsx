import React, {useEffect, useRef} from 'react';
import PropTypes from 'prop-types';

const MainOrSubPage = (props) => {
    const optionsRef = useRef();

    useEffect(() => {
        if (props.options && optionsRef.current) {
            props.emitOptionsWidth?.(optionsRef.current.getBoundingClientRect().width)
        }
    }, [optionsRef, props.options])

    return (
        <>
            <div className="main-bar_title">
                {props.type === 'sub' ?  <span className="icon-Back" onClick={() => props.goBack()}></span> : ''}
                <h4>{props.title}</h4>
            </div>
            {props.options ? <div className="right-options-bar" ref={optionsRef}>
                {React.cloneElement(props.options, {type: props.type})}
            </div> : ''}
        </>
    )
}

MainOrSubPage.propTypes = {
    emitOptionsWidth: PropTypes.func,
    deviceParams: PropTypes.object,
    mainBarRef: PropTypes.object,
    overflow: PropTypes.bool,
    options: PropTypes.object,
    title: PropTypes.string.isRequired,
    goBack: PropTypes.func,
    paddingMainWrap: PropTypes.number,
    iconSize: PropTypes.number,
    iconMargin: PropTypes.number,
    type: PropTypes.string,
}
export default React.memo(MainOrSubPage);

