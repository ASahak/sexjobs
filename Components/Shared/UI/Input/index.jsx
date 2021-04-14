import React, {useEffect, useState, useRef, useMemo, useCallback, useLayoutEffect} from 'react';
import PropTypes from 'prop-types';
import UseStyles from './styles';
import variablesJSS from "static/styles/jss/abstracts/variables";
import TextField from "@material-ui/core/TextField";
import { UiGenerateMargin, UIGetMarginLeftRight } from 'utils/handlers';
const canUseDOM = (typeof window !== 'undefined');
React.useLayoutEffect = canUseDOM ? useLayoutEffect : useEffect;

const calculateIconPosition = (inputRef) => { // Calculate Icon's position
    if (inputRef) {
        return `translateY(${((inputRef.getBoundingClientRect().height / 2) - variablesJSS.$input.$iconSize / 2)}px`
    }
}

const Input = (props) => {
    const [allowTransition, setAllowTransition] = useState(false);
    const [inputRef, setInputRef] = useState(null);
    const [limitCount, setLimitCount] = useState(0);
    const [marginBottom, setMarginBottom] = useState(null);
    const [icon, setIcon] = useState({});
    const [passwordTypeToggle, setPasswordTypeToggle] = useState(false);

    const styles = UseStyles({
        transition: allowTransition ? 'margin-bottom 400ms cubic-bezier(0.04, 1.1, 1, 0.99)' : '0s',
        backgroundColor: [props.customStylesInput.background, '!important'],
        border: props.customStylesInput.border,
        labelColor: props.label && props.label.color || variablesJSS.$input.$baseColor,
        iconTop: calculateIconPosition(inputRef),
        marginBottom: marginBottom || '0px',
    }, {link: true});
    const parentRef = useRef();
    const errorRef = useRef();
    const bottomWrapRef = useRef();
    const labelRef = useRef();
    const inputWrapperRef = useRef();

    useEffect(() => { // Find and Set ref of Input/Textarea element
        if (parentRef.current) {
            setInputRef(parentRef.current.querySelector(props.textArea ? 'textarea' : 'input'))
        }
    }, [parentRef.current])

    useEffect(() => { // Set/Remove events
        if (parentRef.current && inputRef) {
            setAttributes();
            for (let event = 0; event < props.events.length; event++) { // Add Event Listeners
                inputRef.addEventListener(
                    props.events[event],
                    props['on' + props.events[event].replace(props.events[event].charAt(0), props.events[event].charAt(0).toUpperCase())]);
            }
        }
        return () => {
            if (parentRef.current && inputRef) { // Remove Event Listeners
                for (let event = 0; event < props.events.length; event++) {
                    inputRef.removeEventListener(
                        props.events[event],
                        props['on' + props.events[event].replace(props.events[event].charAt(0), props.events[event].charAt(0).toUpperCase())]);
                }
            }
        }
    }, [props.events, inputRef])

    useEffect(() => { // Value Override
        if (inputRef) {
            inputRef.value = props.value || ''
        }
    }, [props.value, inputRef]);

    useEffect(() => {
        if (parentRef.current) setAttributes();
    }, [props.attr, inputRef]);

    useEffect(() => {
        if (props.value) {
            setLimitCount(String(props.value).length)
        }
        if (props.maxCounter && inputRef) {
            inputRef.setAttribute('maxlength', props.maxCounter);
            inputRef.addEventListener('keyup', counterCalculator);
        }
        return () => {
            inputRef && inputRef.removeEventListener('keyup', counterCalculator);
        }
    }, [props.maxCounter, props.value, inputRef])

    useEffect(() => { // Set Icon
        if (props.readonly && !props.readonlyNoIcon && !props.icon) {
            setIcon({
                className: 'icon-Lock',
            })
        } else if (props.errors) {
            setIcon({
                className: 'error-icon icon-Alert',
            })
        } else if (props.type === 'password' && props.passwordEye) {
            setIcon({
                className: 'icon-Views toggle-password' + (passwordTypeToggle ? ' icon-eye-blocked' : ''),
                onClick: togglePassword
            })
        } else if (props.icon) {
            setIcon({
                ...(props.icon.template && {template: props.icon.template}),
                className: props.icon.className + (props.icon.onClick ? ' clickable' : ''),
                ...(props.icon.onClick && {onClick: props.icon.onClick}),
            })
        } else {
            setIcon({})
        }
    }, [props.passwordEye, props.type, props.icon, props.errors, passwordTypeToggle, props.readonly, props.readonlyNoIcon]);

    useEffect(() => {
        if (marginBottom) {
            setAllowTransition(true)
        }
    }, [marginBottom])

    const togglePassword = useCallback(() => { // Toggle Password Eye Icon
        setPasswordTypeToggle(!passwordTypeToggle)
    }, [props.passwordEye, passwordTypeToggle]);

    useEffect(() => { // Calculate Margin Bottom
        const bottomElementHeight = errorRef.current ? errorRef.current.offsetHeight + 2 :
            bottomWrapRef.current ? bottomWrapRef.current.offsetHeight + 2 : 0;
        setMarginBottom(bottomElementHeight /*marginTopBottom*/
            - (props.transparentInput ? variablesJSS.$input.$transparentInput.$errorDefaultHeight - 4 : 0) + 'px')
    }, [props.required, props.errors, props.transparentInput, errorRef.current, props.helperText, props.maxCounter, bottomWrapRef.current])

    const setAttributes = useCallback(() => { // Set all attributes
        if (props.attr && inputRef) {
            Object.keys(props.attr).map(name => {
                inputRef.setAttribute(name, props.attr[name])
            })
        }
    }, [props.attr, props.textArea, inputRef])

    const counterCalculator = useCallback(() => { // Count the limited characters
        setLimitCount(inputRef.value.length)
    }, [inputRef]);

    // Get position of Main Wrapper
    const generateMarginDiv = useCallback(() => UiGenerateMargin(props.margin, props.direction), [props.direction, props.margin]);

    const inlineStylesParent = useMemo(() => { // Set inline styles on the Main Wrapper
        return {
            ...generateMarginDiv(),
            width: props.fullWidth ? `calc(100% - ${UIGetMarginLeftRight(props.margin)}px)` : props.width,
            ...(props.label && {
                display: 'flex',
                flexDirection: 'column'
            }),
            ...(!props.label && {
                display: 'block',
            }),
            ...props.customStylesDiv
        }
    }, [
        props.customStylesDiv,
        props.label,
        props.fullWidth,
        props.direction,
        props.width,
        props.margin]);

    const icons = useMemo(() => {
        if (icon.template) return icon.template;
        else if (icon.className) return (
            <i className={`${icon.className} input-icon`} onClick={icon.onClick}></i>
        )
    }, [props.icon, icon]);
    //
    const generateClassNameParent = useMemo(() => {
        return `${props.size + '-parent-wrapper'} ${props.className} ${props.likeMaterialInput ? 'material-input-wrapper' : ''} ${props.transparentInput ? styles['transparent-input-wrap']: ''} ${styles[props.theme ? 'theme-' + props.theme : '']} ${styles['input-wrap']} ${icon.className ? styles['with-icon'] : ''} ${props.errors ? 'error-field' : ''} ${props.type === "checkbox" ? styles['wrap-with-checkbox'] : props.type === "radio" ? styles['wrap-with-radio'] : ''}`
    }, [props.type, props.errors, props.theme, props.transparentInput, props.className, icon, props.size]);

    const label = useMemo(() => {
        if (props.label) {
            const textLabel = props.label.title + (props.required ? ' *' : '');
            return (
                <label
                    ref={labelRef}
                    htmlFor={(props.type === "checkbox" || props.type === "radio") ? props.label.forId : null}
                    className={'label-' + props.size}
                    dangerouslySetInnerHTML={{__html: textLabel}}
                ></label>
            )
        }
    }, [props.type, props.required, props.label, labelRef.current]);

    const bottomWrap = useMemo(() => {
        if ((props.maxCounter || props.helperText || props.required) && !props.errors) {
            const text = props.helperText || (props.required ? 'Required *' : '');
            return (
                <div className="bottom-wrap" ref={bottomWrapRef}>
                    {text && <p className="helper-text">{text}</p>}
                    {props.maxCounter && <span className="counter">{limitCount}/{props.maxCounter}</span>}
                </div>
            )
        } else if (props.errors) return (
            <span ref={errorRef} className={'error-line'}>{props.errors}</span>
        )
    }, [props.helperText, props.errors, props.maxCounter, errorRef, limitCount, props.required]);

    return (
        <div style={inlineStylesParent}
             className={generateClassNameParent}
             ref={parentRef}>
            {label}
            <div ref={inputWrapperRef} className="input-element-wrapper">
                {props.textArea ? <textarea
                    name={props.name}
                    cols={props.textArea.cols || 30}
                    rows={props.textArea.rows || 5}
                    className={'textarea-' + props.size}
                    style={props.customStylesInput}
                    ref={props.refBind}
                    placeholder={props.placeholder || 'Input text...'}
                    readOnly={props.readonly}
                    tabIndex={props.readonly ? -1 : 0}
                ></textarea> : props.likeMaterialInput ? <TextField
                    readOnly={props.readonly}
                    disabled={props.disabled}
                    placeholder={props.placeholder || ''}
                    className={'input-' + props.size}
                    ref={props.refBind}
                    type={props.type}
                    name={props.name}
                    style={props.customStylesInput}
                /> : <input
                    tabIndex={props.readonly ? -1 : 0}
                    readOnly={props.readonly}
                    style={props.customStylesInput}
                    name={props.name}
                    className={'input-' + props.size}
                    ref={props.refBind}
                    type={(passwordTypeToggle && 'text') || props.type}
                    id={(props.label && (props.type === "checkbox" || props.type === "radio")) ? props.label.forId : props.id}
                    disabled={props.disabled}
                    placeholder={props.placeholder || ''} />}
                {(props.type === 'radio' || props.type === 'checkbox') ? <>
                    <span className={`checkbox-wrap ${props.halfSelected ? 'selected-half-part' : ''}`}></span>
                </>: ''}
                {icons}
            </div>
            {bottomWrap}
        </div>
    )
};

Input.defaultProps = {
    size: 'md',
    type: 'text',
    fullWidth: false,
    events: [],
    margin: 0,
    required: false,
    readonly: false,
    transparentInput: false,
    theme: 'light',
    customStylesInput: {},
    customStylesDiv: {},
    readonlyNoIcon: false,
    className: '',
};
Input.propTypes = {
    readonlyNoIcon: PropTypes.bool,
    className: PropTypes.string,
    theme: PropTypes.string,
    readonly: PropTypes.bool,
    halfSelected: PropTypes.bool,
    likeMaterialInput: PropTypes.bool,
    transparentInput: PropTypes.bool,
    helperText: PropTypes.string,
    direction: PropTypes.string,
    textArea: PropTypes.object,
    required: PropTypes.bool,
    passwordEye: PropTypes.bool,
    fullWidth: PropTypes.bool,
    maxCounter: PropTypes.number,
    size: PropTypes.string,
    id: PropTypes.string,
    refBind: PropTypes.any,
    name: PropTypes.string,
    label: PropTypes.object,
    type: PropTypes.string.isRequired,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    errors: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    disabled: PropTypes.bool,
    events: PropTypes.array,
    icon: PropTypes.object,
    customStylesDiv: PropTypes.object,
    customStylesInput: PropTypes.object,
    margin: PropTypes.oneOfType([PropTypes.array, PropTypes.number]),
    attr: PropTypes.object,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    placeholder: PropTypes.string,
};
export default React.memo(Input);
