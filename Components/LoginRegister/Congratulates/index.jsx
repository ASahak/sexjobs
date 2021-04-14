import React from 'react';
import { Button } from 'Components/Shared/UI';
import {useRouter} from 'next/router';

const Congratulates = (props) => {
    const router = useRouter();

    return (
        <div className="congratulates-container">
            <h5>
                Thank you for creating your account!
                <br/>
                Welcome to Sexjobs.nl!
            </h5>
            <p>
                You are one step away to be able to place advertisements. An email is on its way with a link to activate your account.
            </p>
            <p>
                If you have not received an e-mail after a while, please check the spam box (unwanted messages) of your e-mail program. It is probably there.
            </p>
            <p>
                If you create an account you automatically agree with the advertising rules, the code of conduct and the general terms and conditions as they apply to sexjobs.
            </p>
            <p>
                We reserve the right to decline and close accounts to increase security and reliability!
                <br/>
                Also read:
                <a>Tips for safe dating</a> |<a>Sex jobs, police & justice</a>
            </p>
            <div className="issues">
                <b>Issues?</b>
                <p>If you still run into problems, please check our
                    <a>FAQ page</a>.
                    Here are answers to most questions. Are you still unable to resolve the matter or do you want to give feedback? Send a message via our
                    <a>contact form</a>.
                </p>
            </div>
            <p>
                After activation you are immediately logged in and you can start placing your ads.
            </p>
            <p>
                Have fun and especially good luck at sexjobs.nl!
                <br/>
                Team Sexjobs
            </p>
            <Button
                size={'md'}
                text="Go to Site"
                typeButton="primary"
                direction="center"
                width={220}
                margin={[30, 0, 0, 0]}
                onClick={() => router.push({
                    pathname: '/'
                })}
            />
        </div>
    )
}
export default React.memo(Congratulates)