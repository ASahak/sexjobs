import React from 'react';
import UseStyles from './styles';
import PropTypes from 'prop-types';
import { Collapse } from 'reactstrap';

const Body = React.memo((props) => {
    const styles = UseStyles({}, {link: true});
    return (
        <div className={`${styles['filters_body-container']}`}>
            <Collapse isOpen={props.slideToggle}>
                {props.children}
            </Collapse>
        </div>
    )
}, areEqual);

function areEqual(prevProps, nextProps) {
    let render = true;
    Object.keys(nextProps.necessaryRender).forEach(_ => {
        const prev = prevProps.necessaryRender[_];
        const next = nextProps.necessaryRender[_];
        if ((typeof prev === 'object' ? JSON.stringify(prev) : prev)
        !== (typeof next === 'object' ? JSON.stringify(next) : next)) render = false
    })
    return render
}
Body.defaultProps = {
    necessaryRender: {},
};
Body.propTypes = {
    necessaryRender: PropTypes.object,
    slideToggle: PropTypes.bool.isRequired,
};

export default Body;