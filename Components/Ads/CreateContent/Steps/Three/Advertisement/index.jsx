import React from 'react';
import PropTypes from 'prop-types';
import Events from '../CategoryTypes/Events';
import Vacancy from '../CategoryTypes/Vacancy';
import Regular from '../CategoryTypes/Regular';

const Advertisement = (props) => {
    const categoryType = props.categoryType === 'events' ? 'events' : props.categoryType === 'vacancy' ? 'vacancy' : 'regular';

    const GenerateView = () => {
        switch (categoryType) {
            case 'events':
                return <Events nextStep={() => props.goToNext('four')} />;
            case 'vacancy':
                return <Vacancy nextStep={() => props.goToNext('four')} />
            case 'regular':
                return <Regular nextStep={() => props.goToNext('four')} />
        }
    }

    return (
        <div className="advertisement-content">
            {GenerateView()}
        </div>
    )
}
Advertisement.propTypes = {
    categoryType: PropTypes.string.isRequired,
    goToNext: PropTypes.func,
}
export default React.memo(Advertisement);