import React, {useState} from 'react';
import PropTypes from 'prop-types';
import dynamic from 'next/dynamic';
import {Container, Row, Col} from 'reactstrap';
import {NextSeo} from 'next-seo';
import UseStyles from 'static/styles/jss/base/globalPages';
import {Button, Input, DateOfBirth} from 'Components/Shared/UI';
import {useForm} from 'react-hook-form';
const MySJSimpleTitleBar = dynamic(() => import('Components/Dumb/MySJSimpleTitleBar').then(_ => _.default), {ssr: true});
const FileUploader = dynamic(() => import('Components/Plugins/FileUploader').then(_ => _.default), {ssr: true});

const Verification = (props) => {
    const styles = UseStyles({}, {link: true});
    const [loadingIcon, setLoadingIcon] = useState(false);

    const { register, handleSubmit, errors, watch, control, getValues } = useForm({
        mode: 'onKeypress',
    });

    const valueOfYearYour = watch('year_yourID', '');
    const valueOfMonthYour = watch('month_yourID', '');

    const valueOfYearPartners = watch('year_partnersID', '');
    const valueOfMonthPartners = watch('month_partnersID', '');

    const onSubmitVerification = async (data) => {
        setLoadingIcon(true)
        setTimeout(() => { // todo need to make verification api
            setLoadingIcon(false);
        }, 2000)
    }

    return (
        <>
            <NextSeo
                title="Verification"
                description="Some description"
            />
            <Container>
                <Row>
                    <Col xs={12} sm={12} md={2} xl={3}></Col>
                    <Col xs={12} sm={12} md={8} xl={6}>
                        <MySJSimpleTitleBar style={{marginTop: '16px'}}>
                            <div className="simple-bar_title">
                                <h4>ID Verification</h4>
                            </div>
                        </MySJSimpleTitleBar>
                        <div className={styles['verification-page']}>
                            <form  onSubmit={handleSubmit(onSubmitVerification)}>
                                <div className="section-one_id-v">
                                    <p>We want the advertisements on Sexjobs to be as reliable as possible.</p>
                                    <p>The minimum age that you can place an advertisement on Sexjobs is 21 years and if the moderation team can
                                        doubt the age of the person in the advertisement they can ask for an ID verification. Even if the moderation team
                                        doubts the authenticity of the advertisement, an ID verification can be requested.</p>
                                </div>
                                <div className="section-two_id-v">
                                    <h4>Photo 1: ID</h4>
                                    <p>For this photo we ask you and your partner to upload a photo of your ID proof and confirm your document number
                                        and date of birth. In this photo we want the following information to be legible.</p>
                                    <ul>
                                        <li>The photo</li>
                                        <li>Your date of birth</li>
                                        <li>The document number</li>
                                        <li>Validity of your ID proof</li>
                                    </ul>
                                    <p>You can make all other data on your ID proof unrecognizable. We use this photo to check whether your ID proof is
                                        real and / or you are 21 years old. Once your verification is approved this photo will be permanently removed from
                                        our server.</p>
                                </div>
                                <div className="section-three_id-v">
                                    <FileUploader
                                        bgImageSrc="/images/icons/upload-avatar.png"
                                        accept=".jpg,.png,.jpeg"
                                        label="Your ID"
                                        multiple={false}
                                    />
                                </div>
                                <div className="section-four_id-v">
                                    <Input
                                        refBind={register()}
                                        type="text"
                                        name="document_number_yourID"
                                        errors={errors.document_number_yourID && errors.document_number_yourID.message}
                                        label={{title: "Document Number", color: '#fff'}}
                                        fullWidth={true}
                                        placeholder="WH8847TH"
                                        margin={[0, 0, 16, 0]}
                                    />
                                    <DateOfBirth
                                        errors={errors}
                                        control={control}
                                        watchYear={valueOfYearYour}
                                        watchMonth={valueOfMonthYour}
                                        selects={{
                                            day: {
                                                width: 'calc(33.3333% - 8px)',
                                                margin: [0, 8, 16, 0],
                                                defaultValue: '',
                                                name: 'day_yourID',
                                                rules: {
                                                    required: 'Please select some option',
                                                },
                                                placeholder: 'dd',
                                                size: 'md',
                                            },
                                            month: {
                                                width: 'calc(33.3333% - 8px)',
                                                margin: [0, 0, 16, 8],
                                                defaultValue: '',
                                                name: 'month_yourID',
                                                rules: {
                                                    required: 'Please select some option',
                                                },
                                                placeholder: 'mm',
                                                size: 'md',
                                            },
                                            year: {
                                                width: '50%',
                                                margin: [0, 0, 16, 16],
                                                defaultValue: '',
                                                name: 'year_yourID',
                                                rules: {
                                                    required: 'Please select some option',
                                                },
                                                placeholder: 'yyyy',
                                                size: 'md',
                                            },
                                        }}
                                    />
                                </div>
                                <div className="section-five_id-v">
                                    <FileUploader
                                        bgImageSrc="/images/icons/upload-avatar.png"
                                        accept=".jpg,.png,.jpeg"
                                        label="Your partners ID"
                                        multiple={false}
                                    />
                                    <Input
                                        refBind={register()}
                                        type="text"
                                        name="document_number_yourID"
                                        errors={errors.document_number_yourID && errors.document_number_yourID.message}
                                        label={{title: "Document Number", color: '#fff'}}
                                        fullWidth={true}
                                        placeholder="WH8847TH"
                                        margin={[0, 0, 16, 0]}
                                    />
                                    <DateOfBirth
                                        errors={errors}
                                        control={control}
                                        watchYear={valueOfYearPartners}
                                        watchMonth={valueOfMonthPartners}
                                        selects={{
                                            day: {
                                                width: 'calc(33.3333% - 8px)',
                                                margin: [0, 8, 16, 0],
                                                defaultValue: '',
                                                name: 'day_partnersID',
                                                rules: {
                                                    required: 'Please select some option',
                                                },
                                                placeholder: 'dd',
                                                size: 'md',
                                            },
                                            month: {
                                                width: 'calc(33.3333% - 8px)',
                                                margin: [0, 0, 16, 8],
                                                defaultValue: '',
                                                name: 'month_partnersID',
                                                rules: {
                                                    required: 'Please select some option',
                                                },
                                                placeholder: 'mm',
                                                size: 'md',
                                            },
                                            year: {
                                                width: '50%',
                                                margin: [0, 0, 16, 16],
                                                defaultValue: '',
                                                name: 'year_partnersID',
                                                rules: {
                                                    required: 'Please select some option',
                                                },
                                                placeholder: 'yyyy',
                                                size: 'md',
                                            },
                                        }}
                                    />
                                </div>
                                <div className="section-six_id-v">
                                    <h4>Photo 2: Selfie with ID</h4>
                                    <p>For this photo we ask you and your partner to upload a selfie where you keep the ID proof next to your face.
                                        Please note that the photo on your ID proof is clearly visible.We use this photo to check whether the person on
                                        the ID proof is also the person doing this verification. Once your verification is approved this photo will be
                                        permanently removed from our server.</p>

                                    <FileUploader
                                        bgImageSrc="/images/icons/upload-both_passport.png"
                                        accept=".jpg,.png,.jpeg"
                                        multiple={false}
                                    />
                                </div>
                                <div className="section-seven_id-v">
                                    <h4>Photo 3: Selfie with newspaper</h4>
                                    <p>For the third picture we ask you and your parnter to hold a Dutch newspaper today. We use this photo to verify
                                        that the photos were taken recently. If you don't have a newspaper you can use another document that serves this
                                        purpose, such as a supermarket receipt.</p>

                                    <FileUploader
                                        bgImageSrc="/images/icons/upload-newspaper.png"
                                        accept=".jpg,.png,.jpeg"
                                        multiple={false}
                                    />
                                </div>
                                <div className="section-eight_id-v">
                                    <h4>Photo 4: Selfie</h4>
                                    <p>For the last picture we ask for a clear selfie of you and your partner that suits you well. We use this photo as a
                                        reference to compare all the photos you place with your ad.</p>

                                    <FileUploader
                                        bgImageSrc="/images/icons/upload-both.png"
                                        accept=".jpg,.png,.jpeg"
                                        multiple={false}
                                    />
                                </div>
                                <Button
                                    disabled={loadingIcon}
                                    icon={{direction: 'left', loading: loadingIcon}}
                                    type="submit"
                                    size={'md'}
                                    text="Submit verification"
                                    typeButton="primary"
                                    width={180}
                                    margin={[30, 0, 0, 0]}
                                />
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
Verification.propTypes = {};

export default React.memo(Verification);
