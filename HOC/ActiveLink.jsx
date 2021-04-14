import { useRouter } from 'next/router'
import PropTypes from 'prop-types'
import Link from 'next/link'
import React, {Children, useCallback} from 'react'

const ActiveLink = ({ children, activeClassName, ...props }) => {
    const { asPath } = useRouter();
    const child = Children.only(children)
    const childClassName = child.props.className || ''

    const detectExact = useCallback(() => {
        return props.exact && props.exact.constructor.name === 'Array' ? props.exact.find(e => (asPath !== '/' && asPath.indexOf(e) > -1)) : asPath === props.exact
    }, [props.exact, asPath])

    const className =
        asPath === props.href || asPath === props.as || detectExact()
            ? `${childClassName} ${activeClassName}`.trim()
            : childClassName

    return (
        <Link {...props}>
            {React.cloneElement(child, {
                className: className || null,
            })}
        </Link>
    )
}
ActiveLink.propTypes = {
    activeClassName: PropTypes.string.isRequired,
    exact: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
}
export default ActiveLink;