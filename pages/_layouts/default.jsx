import React from 'react';
import dynamic from 'next/dynamic';
const Footer = dynamic(() => import('Components/Shared/Footer').then(_ => _.default), {ssr: true});
const Header = dynamic(() => import('Components/Shared/Header').then(_ => _.default), {ssr: true});

const Default = ({children}) => {
    return (
        <>
            <Header/>
            <main className="Content">
                {children}
            </main>
            <Footer/>
        </>
    );
};

export default React.memo(Default);