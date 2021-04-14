import React, {useState} from 'react';
import PropTypes from 'prop-types';
import UseStyles from './styles';
import {format, getYear} from "date-fns";
import InfiniteScroll from 'react-infinite-scroller';

const convertDate = (date) => {
    return format(new Date(date), 'dd MMM')
}
const CreditItem = ({data = {}}) => {
    return (
        <div className="credits-item-container">
            <p className="credits-date-wrapper">
                {convertDate(data.date)}
            </p>
            <div className="main-list-item">
                <div className="list-title-side">
                    {data.products?.map((prod, index) => <div key={index}>
                        <h4>{prod.title}</h4>
                        <p>{prod.description}</p>
                    </div>)}
                </div>
                <div className="list-count-stocks-side">
                    <span className={data.count > 0 ? 'positive' : 'negative'}>
                        {data.count}
                    </span>
                </div>
            </div>
        </div>
    )
}
CreditItem.propTypes = {
    data: PropTypes.object.isRequired,
};
const offset = 10;
const DebitsCredits = (props) => {
    const styles = UseStyles({}, {link: true});

    const [groupedPays, setGroupedPays] = useState({})
    const [hasMore, setHasMore] = useState(true)

    const loadMore = (page) => {
        const data = props.data.slice(page * offset - offset, page * offset)
        if(data.length) {
            setTimeout(() => {
                setGroupedPays(data.reduce((acc, item) => {
                    const _getYear = getYear(new Date(item.date))
                    acc[_getYear] = !acc[_getYear] ? [item] : [...acc[_getYear], item];
                    return acc;
                }, {...groupedPays}))
            }, 2000)
        } else {
            setHasMore(false)
        }
    }

    return (
        <div className={styles['credits-list-container']}>
            <InfiniteScroll
                pageStart={0}
                loadMore={loadMore}
                hasMore={hasMore}
                loader={<div id="loader-infinite" key={0}>
                    <img src="/images/loading.gif" alt=""/>
                    LOADING
                </div>}
            >
                {Object.keys(groupedPays).reverse().map(year => <div key={year}>
                    <span className="year-title">{year}</span>
                    {groupedPays[year].map(yearItem => <CreditItem key={yearItem.date} data={yearItem} />)}
                </div>)}
            </InfiniteScroll>
        </div>
    )
}
DebitsCredits.propTypes = {
    data: PropTypes.array.isRequired,
};
export default DebitsCredits;