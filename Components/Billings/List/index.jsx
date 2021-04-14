import React, {useState} from 'react';
import PropTypes from 'prop-types';
import UseStyles from './styles';
import { format, getYear } from 'date-fns';
import InfiniteScroll from 'react-infinite-scroller';

const convertDate = (date) => {
    return format(new Date(date), 'dd MMM')
}
const BillingItem = ({data = {}}) => {
    return (
        <div className="billing-item-container">
            <p className="billing-date-wrapper">
                {convertDate(data.date)}
            </p>
            <div className="main-list-item">
                <div className="list-title-side">
                    <h4>{data.fileName}</h4>
                    <p>{data.paidVia}</p>
                </div>
                <div className="list-price-side">
                    <b>€ {data.price}</b>
                    <div>
                        <span className="icon-Document"></span>
                        <span>Factuur</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
BillingItem.propTypes = {
    data: PropTypes.object.isRequired,
};
const offset = 5;
const BillingList = (props) => {
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
        <div className={styles['billing-list-container']}>
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
                    {groupedPays[year].map(yearItem => <BillingItem key={yearItem.date} data={yearItem} />)}
                </div>)}
            </InfiniteScroll>
        </div>
    )
}
BillingList.propTypes = {
    data: PropTypes.array.isRequired,
}
export default BillingList;