import React from 'react';
import UseStyles from './styles';
import {Row, Col} from 'reactstrap';
import Link from 'next/link';

const Information = (props) => {
    const styles = UseStyles({}, {link: true});

    return (
        <div className={styles['information-wrapper']}>
            <Row>
                <Col xs={12} sm={4} >
                    <div className="info-item">
                        <h4>
                            <span className="icon-info"></span>
                            Over Sexjobs
                        </h4>
                        <p>Sexjobs is actief sinds 2002. Wij zijn uitgegroeid tot dé erotische marktplaats voor het ruilen, kopen en verkopen van erotische diensten en artikelen. Met dagelijks meer dan 300 nieuwe advertenties de grootste seks advertentie site van Nederland.</p>
                    </div>
                </Col>
                <Col xs={12} sm={4} >
                    <div className="info-item">
                        <h4>
                            <span className="icon-My-Accounts"></span>
                            Onze bezoekers
                        </h4>
                        <p>Met maandelijks meer dan 1,2 miljoen bezoekers en advertenties in trending categorieën als
                             <Link href="/dames-van-plezier">
                                <a>
                                     “dames van plezier”
                                </a>
                            </Link>
                             en
                            <Link href="/gratis-sexcontact">
                                <a>
                                    “gratis sexcontact”
                                </a>
                            </Link>
                             raak je niet snel uitgekeken en zal je advertentie al snel zichtbaar zijn voor duizenden bezoekers per dag.
                            <Link href="/">
                                <a>
                                    Plaats eenvoudig een advertentie!
                                </a>
                            </Link>
                        </p>
                    </div>
                </Col>
                <Col xs={12} sm={4} >
                    <div className="info-item">
                        <h4>
                            <span className="icon-Advertenties"></span>
                            Advertenties
                        </h4>
                        <p>Met meer dan 15.600 online actieve advertenties en dagelijks een paar honderd nieuwe advertenties verdeeld over verschillende categorieën als bijvoorbeeld
                            <Link href="/dames-van-plezier/thuisontvangst">
                                <a>
                                    “Thuisontvangst”,
                                </a>
                            </Link>
                            <Link href="/dames-van-plezier/escort">
                                <a>
                                    “Escort”
                                </a>
                            </Link>
                             en

                            <Link href="/erotische-massage">
                                <a>
                                    “Erotische massage”
                                </a>
                            </Link>
                            zal je snel een leuke advertentie vinden.
                        </p>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
export default React.memo(Information)