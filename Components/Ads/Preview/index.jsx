import React from 'react';
import UseStyles from './styles';
import {Avatar, Button, InlineToast} from 'Components/Shared/UI';
import MySJSimpleTitleBar from 'Components/Dumb/MySJSimpleTitleBar';

const advertisersList = [
    {avatarPath: '/images/profileAvatar.jpg', name: 'Katinka'},
    {avatarPath: '', name: 'Mila'},
]
const Preview = (props) => {
    const styles = UseStyles({}, {link: true});

    return (
        <div className={styles['advertisement-preview']}>
            <p>Op 3 oktober 2020 heeft Katinka je uitgenodigd om
                deel te nemen aan haar advertentie en je daarbij
                het volgende bericht verstuurd:</p>
            <p>
                <i>
                    “Hee snoes,
                </i>
            </p>
            <p>
                <i>
                    Ik heb een advertentie aangemaakt om samen een
                    trio aan te bieden.
                </i>
            </p>
            <p>
                <i>
                    x Katinka”
                </i>
            </p>
            <div className="flex-btns">
                <Button
                    icon={{direction: 'left', className: 'icon-Check-alt'}}
                    margin={[16, 16, 20, 0]}
                    text="Accept"
                    typeButton="primary"
                    mobileFullWidth={true}
                    width={250}
                />
                <Button
                    icon={{direction: 'left', className: 'icon-Block'}}
                    margin={[0, 16, 20, 0]}
                    text="Weigeren"
                    typeButton="alt"
                    mobileFullWidth={true}
                    width={250}
                />
            </div>
            <InlineToast
                title={'Let op'}
                description="Deze advertentie kan pas online komennadat jij deze uitnodiging accepteert."
                type={'info'}
            />
            <MySJSimpleTitleBar>
                <div className="simple-bar_title">
                    <h4>Trio met twee leuke dames</h4>
                </div>
            </MySJSimpleTitleBar>
            <div className={styles['image-users-container']}>
                <div className={styles['image-wrapper']}>
                    <img src="/images/profileAvatar.jpg" alt=""/>
                </div>
                <div className={styles['users-wrapper']}>
                    <div className="content-with-shadow">
                        <h4>Adverteerders </h4>
                        <ul className={styles['advertisers-list']}>
                            {advertisersList.map(el => <li key={el.name}>
                                <Avatar avatarSrc={el.avatarPath} height={30} width={30} name={el.name}/>
                                <span>{el.name}</span>
                                <span className="icon-Accordion-Open"></span>
                            </li>)}
                        </ul>
                        <p>
                            <span className="icon-Globe"></span>
                            Website:
                            <a href="#">www.erowerk.nl</a>
                        </p>
                    </div>
                </div>
            </div>
            <div className="content-with-shadow">
                <p>Hey Kanjers!</p>
                <p>Wij 2 leuke gezellige en lekkere slanke
                    blonde dames van 34 en 36 jaar
                    waarvan 1 dame die al bekend is bij
                    jullie en 1 dame nieuw in het vak maar
                    ook reuze zin heeft in een nieuwe
                    ervaring, aldus niet alleen maar samen
                    met ons geile dingen te willen
                    ontdekken en gewoon genieten wil van
                    genot!
                    Wij houden ervan om de man zijn
                    genot te geven door ten eerste onze 4
                    handen massage;) lekker genieten en
                    jezelf bloot te geven aan 2 dames.
                    Lekker pijpen met cd om’ste beurten
                    om daarna met cd een nat poesje te
                    willen nemen wie wil dat nu niet?!Wij
                    ontvangen discreet en prive lekker
                    netjes nederlands en we willen ma 1
                    ding en dat is dat jij als onze klant
                    tevreden na buiten loopt. Wij zijn zelf
                    niet bi ma ach wat gebeurd gebeurd ;)
                    heb jij zin en wil je meer weten? app
                    ons en wie weet zien we je snel!
                    Pijpdate alleen kan ook!!
                    Tikkie is mogelijk!!</p>
                <p>Katinka & Evi</p>
            </div>
            <div className="content-with-shadow">
                <h4>Mogelijkheden</h4>
                <ul className="list-of-checked">
                    <li>Switch</li>
                    <li>Online femdom</li>
                    <li>Onderdanig aangeboden</li>
                    <li>Kinky, extreem & bizar</li>
                    <li>Geldslaaf</li>
                    <li>Dominant</li>
                </ul>
            </div>
            <div className="content-with-shadow">
                <h4>Beschikbaarheid</h4>
                <ul className="list-of-checked">
                    <li>Zondag</li>
                    <li>Zaterdag</li>
                    <li>Vrijdag</li>
                    <li>Donderdag</li>
                    <li>Woensdag</li>
                    <li>Dinsdag</li>
                    <li>Maandag</li>
                </ul>
            </div>
            <div className="content-with-shadow advert-info-container">
                <h4>Advertentie informatie</h4>
                <div>
                    <p>
                        <span>Locatie:</span>
                        <span>Den Haag</span>
                    </p>
                    <p>
                        <span>Categorie:</span>
                        <span>Dames van Pleizer</span>
                    </p>
                    <p>
                        <span>Labels:</span>
                        <span className="badge-label_in-view">Dominant</span>
                    </p>
                </div>
                <div>
                    <p>
                        <span>Actief sinds:</span>
                        <span>09 Nov 2018</span>
                    </p>
                    <p>
                        <span>Laatste update:</span>
                        <span>-</span>
                    </p>
                    <p>
                        <span>Bezoekers:</span>
                        <span>-</span>
                    </p>
                    <p>
                        <span>Advertentie nr.:</span>
                        <span>6717233</span>
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Preview;