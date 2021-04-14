import React, {useEffect, useState} from 'react';
import {useRouter} from 'next/router';
import {Container, Row, Col} from 'reactstrap';
import { NextSeo } from 'next-seo';
import {
    getTitleByCategory
} from 'utils/handlers';
import Breadcrumbs from 'Components/Dumb/Breadcrumbs';
import dynamic from 'next/dynamic';
import {CategoryBadge} from 'Components/Smart/Badges';
import {
    fetchLocations,
    fetchPossibilities,
    fetchWithPicturesResultsCount,
    fetchAppearance,
    fetchPrice,
    fetchAvailability,
    fetchSpeakLanguages,
    fetchMeetingPlaces,
} from 'store/sagas/filters';
const Filters = dynamic(() => import('Components/Smart/Filters').then(_ => _.default), {ssr: false});

const _category = {
    id: '1',
    adPromotion: 'gold',
    title: 'Nina Sweet 100% Live 1',
    imageSrc: '/images/suggested/1.jpg',
    link: '/',
    sticker: 'Bit Tits',
    search: 'Lady',
    gender: {
        type: 'male',
        advertiser: 'Big beauty'
    },
    description: 'Slanke,met  sexy lijf , spontaan,sensuel en ondeugende  live   blonde dame van 47jaar wacht op jou  VANDAAG   Ontvang  prive af en toe nette heren, 100% discreet  en hygiene - omg- Utrecht vlakbij A27 afslag 29 Gratis parkeren !!!!!   Wassen/ douchen mogelijkheid ..... . Pijpen Zonder Condoom!!!!!, Intiem met condoom,anders gaat de feest niet door! dus  lekker safe sex met respect voor elkaar!!!!!.  Standjes,Tong  Zoenen, Beffen, meerdere hoogtepunten mogelijk van jou en  ook van mij kant .!!!!! etc    DUS ECHT SAMEN  GENIETEN  VAN HEERLIJKE  SEX PARTIJ !!! .Wat dacht je om lekker door mij verwent te worden?!!!!!!!!!! En   natuurlijk jij mag mij ook verwennen ~~!!!! Voor een Uur   heerlijke   ontspanning met mij  om nooit te vergeten vraag ik €125.00  .,  Half uur euro 85.00  all in . BEL ME SNEL!!!!!!! ALLEEN  VOOR EEN AFSPRAAK  !!!!!!!!! OP ...    Graag met nummerweergave !!!!!,.  Privenummers NEEM IK NIET OP !!!!!!!!!!!  ook geen sms -en   Soms neemt mijn vriend(in) op als ik niet in de gelegenheid bent.  kusjes  van xandra. Ik wacht op You!!!!!!!',
    begin: 'van Pandora',
    labels: ['Dominant'],
    bumpDate: 'Fri Jan 29 2021 16:26:37 GMT+0400 (Armenia Standard Time)',
    category: 'Cam & Telephoonsex',
    location: 'Amsterdam',
}
const _category2 = {
    id: '1',
    adPromotion: 'silver',
    title: 'Nina Sweet 100% Live 1',
    imageSrc: '/images/suggested/2.jpg',
    link: '/',
    sticker: 'Bit Tits 2',
    gender: {
        type: 'female',
        advertiser: 'Big beauty'
    },
    description: 'Slanke,met  sexy lijf , spontaan,sensuel en ondeugende  live   blonde dame van 47jaar wacht op jou  VANDAAG   Ontvang  prive af en toe nette heren, 100% discreet  en hygiene - omg- Utrecht vlakbij A27 afslag 29 Gratis parkeren !!!!!   Wassen/ douchen mogelijkheid ..... . Pijpen Zonder Condoom!!!!!, Intiem met condoom,anders gaat de feest niet door! dus  lekker safe sex met respect voor elkaar!!!!!.  Standjes,Tong  Zoenen, Beffen, meerdere hoogtepunten mogelijk van jou en  ook van mij kant .!!!!! etc    DUS ECHT SAMEN  GENIETEN  VAN HEERLIJKE  SEX PARTIJ !!! .Wat dacht je om lekker door mij verwent te worden?!!!!!!!!!! En   natuurlijk jij mag mij ook verwennen ~~!!!! Voor een Uur   heerlijke   ontspanning met mij  om nooit te vergeten vraag ik €125.00  .,  Half uur euro 85.00  all in . BEL ME SNEL!!!!!!! ALLEEN  VOOR EEN AFSPRAAK  !!!!!!!!! OP ...    Graag met nummerweergave !!!!!,.  Privenummers NEEM IK NIET OP !!!!!!!!!!!  ook geen sms -en   Soms neemt mijn vriend(in) op als ik niet in de gelegenheid bent.  kusjes  van xandra. Ik wacht op You!!!!!!!',
    begin: 'van Pandora',
    labels: ['Dominant'],
    bumpDate: 'Fri Jan 29 2021 16:26:37 GMT+0400 (Armenia Standard Time)',
    category: 'Cam & Telephoonsex',
    location: 'Amsterdam',
}
const Category = (props) => {
    const router = useRouter();
    const [title, setTitle] = useState('');

    useEffect(async () => {
        if (router.query && router.query.title) {
            setTitle(router.query.title)
        } else {
            const data = await getTitleByCategory(router.query, 'category')
            setTitle(data)
        }
    }, [router.query])

    return (
        <>
            <NextSeo
                title={title}
                description="Some description"
            />
            <Container>
                <Row>
                    <Col xs={12}>
                        <Breadcrumbs />
                    </Col>
                    <Col xs={12} md={4} lg={3} xl={2}>
                        <Filters
                            filterTypes={[
                                'selected_filters',
                                'search',
                                'now_available',
                                'location',
                                'gender',
                                'possibilities',
                                'pictures',
                                'age',
                                'appearance',
                                'pricing',
                                'availability',
                                'languages',
                                'meet_places',
                            ]}
                        />
                    </Col>
                    <Col xs={12} md={8} lg={6} xl={7}>
                        <CategoryBadge
                            data={_category}
                        />
                        <CategoryBadge
                            data={_category2}
                        />
                    </Col>
                </Row>
            </Container>
        </>
    )
}
Category.getInitialProps = async (props) => {
    const { isServer } = props.ctx;

    fetchLocations().next();
    fetchPossibilities().next();
    fetchWithPicturesResultsCount().next();
    fetchAppearance().next();
    fetchPrice().next();
    fetchAvailability().next();
    fetchSpeakLanguages().next();
    fetchMeetingPlaces().next();

    return { isServer };
}
export default Category;