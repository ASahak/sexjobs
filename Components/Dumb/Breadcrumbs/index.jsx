import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import UseStyles from './styles';


const Breadcrumbs = () => {
    const styles = UseStyles({}, {link: true});
    const router = useRouter();
    const [breadcrumbs, setBreadcrumbs] = useState(null);

    useEffect(() => {
        if (router) {
            const linkPath = router.asPath.split('?')[0].split('/');
            linkPath.shift();

            const pathArray = linkPath.map((path, i) => {
                return { breadcrumb: path, href: '/' + linkPath.slice(0, i + 1).join('/') };
            });

            setBreadcrumbs(pathArray);
        }
    }, [router]);

    if (!breadcrumbs) {
        return null;
    }

    return (
        <nav aria-label="breadcrumbs">
            <ul className={styles.breadcrumb}>
                <li>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
                {breadcrumbs.filter(e => e.href !== '/').map((breadcrumb, i) => {
                    return (
                        <li key={breadcrumb.href}>
                            <Link href={breadcrumb.href}>
                                <a>
                                    {breadcrumb.breadcrumb.replace(/-/g, ' ')}
                                </a>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};
export default Breadcrumbs;