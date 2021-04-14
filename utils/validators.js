import {
    VALIDATORS,
} from './constants';

export default {
    EMAIL_VALIDATOR : {
        required: 'Please complete this mandatory field',
        pattern: {
            value: VALIDATORS.EMAIL_PATTERN,
            message: 'Please write your email address in format: yourname@example.com',
        }
    },
    PASSWORD_VALIDATOR : {
        required: 'Please complete this mandatory field',
        minLength: {
            value: 8,
            message: 'Use at least 8 characters',
        },
        validate: {
            containsDigit: value => VALIDATORS.DIGIT_PATTERN.test(value),
            containsUppercaseLowercase: value => VALIDATORS.UPPERCASE_LOWERCASE_PATTERN.test(value)
        }
    }
}