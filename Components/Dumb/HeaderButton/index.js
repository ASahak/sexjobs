import React from 'react';
import {Button} from 'Components/Shared/UI';
import {useRouter} from 'next/router';
import {baseSelector} from 'store/reselect';
import {useSelector} from 'react-redux';

const HeaderBtn = (props) => {
    const baseState = useSelector(baseSelector());
    const pageName = baseState.pageName;
    const router = useRouter();

    const goToRoute = async () => {
        try {
            if (pageName) {
                await router.push(pageName === 'login' ? '/register' : '/login')
            } else {
                // todo do something else
            }
        } catch (err) {
            console.error(err.message);
        }
    }
    return (<Button
        className={"ads-button"}
        icon={!pageName ? {className: 'icon-Add', direction: 'left'} : {}}
        size={'md'}
        attr={{'data-appear': !pageName}}
        text={!pageName ? 'Plaats advertentie' : pageName === 'login' ? 'Register' : 'Login'}
        typeButton="primary"
        onClick={() => goToRoute()}
    />)
}
export default HeaderBtn;
