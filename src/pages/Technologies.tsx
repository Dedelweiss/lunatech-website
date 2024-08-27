import { Trans, useTranslation } from 'react-i18next';

import Spotlight, { SpotlightCard } from '@components/Spotlight/Spotlight';
import Breadcrumbs from '@components/Breacrumb/Breadcrumb';
import Container from '@components/Container/Container';
import Section from '@components/Section/Section';
import Category from '@components/Category/Category';
import Title from '@components/Title/Title';
import BorderEffect from '@components/BorderEffect/BorderEffect';
import Address from '@components/Address/Address';
import HeaderPage from '@components/HeaderPage/HeaderPage';
import { technologiesPage } from '@/constants';
import ContactBlock from '@/components/ContactBlock/ContactBlock';
import TechnologieCard from '@/components/TechnologieCard/TechnologieCard';
import Icon from '@/components/Icon/Icon';
import Text from '@components/Text/Text';
import Grid from '@components/Grid/Grid';

const Technologies = () => {
    const { t } = useTranslation();

    return (
        <>
            <Section className="pdt256">
                <Container>
                    <HeaderPage>
                        <Breadcrumbs />
                        <Title level={1}><Trans i18nKey="technologies.title" /> <span><Trans i18nKey="technologies.titleColor" /></span> <Trans i18nKey="technologies.title2" /></Title>
                    </HeaderPage>
                </Container>
            </Section>


            <Container><BorderEffect /></Container>

            <Section className="bg-bgMediumBlue technologies">
                <Container>
                 
                    <div className="mgb64 dflex fd-c">
                        <Category content={<Trans i18nKey="technologies.category2" />} />
                        <Title level={2} className="ta-c" >{t("technologies.title")}<span>technologies </span>{t("technologies.title3")}</Title>
                        <Title level={3} className="ta-c">{<Trans i18nKey="technologies.page.paragraphes[0].title" />}</Title>
                        <Text size="large" className="mgt24"><Trans i18nKey="technologies.page.paragraphes[0].text" /></Text>
                    </div>
                    <Grid>
                        <div className="col-lg-6 col-md-12 spotlight__card ">
                            <Title level={3} className="title" >{<Trans i18nKey="technologies.page.paragraphes[1].title" />}</Title>
                            <Title level={4} className="expertise" >{<Trans i18nKey="technologies.page.paragraphes[1].expertise" />}</Title>
                            <Title level={4} className="technologies" >{<Trans i18nKey="technologies.page.paragraphes[1].technologies" />}</Title>
                            <Text size="medium" className="content mgt24"><Trans i18nKey="technologies.page.paragraphes[1].text" /></Text>
                        </div>
                        <div className="col-lg-6 col-md-12 spotlight__card ">
                            <Title level={3} className="title" >{<Trans i18nKey="technologies.page.paragraphes[2].title" />}</Title>
                            <Title level={4} className="expertise">{<Trans i18nKey="technologies.page.paragraphes[2].expertise" />}</Title>
                            <Title level={4} className="technologies">{<Trans i18nKey="technologies.page.paragraphes[2].technologies" />}</Title>
                            <Text size="medium" className="content mgt24"><Trans i18nKey="technologies.page.paragraphes[2].text" /></Text>
                        </div>

                        <div className="col-lg-6 col-md-12 spotlight__card ">
                            <Title level={3} className="title" >{<Trans i18nKey="technologies.page.paragraphes[3].title" />}</Title>
                            <Title level={4} className="expertise">{<Trans i18nKey="technologies.page.paragraphes[3].expertise" />}</Title>
                            <Title level={4} className="technologies">{<Trans i18nKey="technologies.page.paragraphes[3].technologies" />}</Title>
                            <Text size="medium" className="content mgt24"><Trans i18nKey="technologies.page.paragraphes[3].text" /></Text>
                        </div>

                        <div className="col-lg-6 col-md-12 spotlight__card">
                            <Title level={3} className="title" >{<Trans i18nKey="technologies.page.paragraphes[4].title" />}</Title>
                            <Title level={4} className="expertise">{<Trans i18nKey="technologies.page.paragraphes[4].expertise" />}</Title>
                            <Title level={4} className="technologies">{<Trans i18nKey="technologies.page.paragraphes[4].technologies" />}</Title>
                            <Text size="medium" className="content mgt24"><Trans i18nKey="technologies.page.paragraphes[4].text" /></Text>
                        </div>

                        <div className="col-lg-6 col-md-12 spotlight__card">
                            <Title level={3} className="title" >{<Trans i18nKey="technologies.page.paragraphes[5].title" />}</Title>
                            <Title level={4} className="expertise">{<Trans i18nKey="technologies.page.paragraphes[5].expertise" />}</Title>
                            <Title level={4} className="technologies">{<Trans i18nKey="technologies.page.paragraphes[5].technologies" />}</Title>
                            <Text size="medium" className="content mgt24"><Trans i18nKey="technologies.page.paragraphes[5].text" /></Text>
                        </div>

                        <div className="col-lg-6 col-md-12 spotlight__card">
                            <Title level={3} className="title" >{<Trans i18nKey="technologies.page.paragraphes[6].title" />}</Title>
                            <Title level={4} className="expertise">{<Trans i18nKey="technologies.page.paragraphes[6].expertise" />}</Title>
                            <Title level={4} className="technologies">{<Trans i18nKey="technologies.page.paragraphes[6].technologies" />}</Title>
                            <Text size="medium" className="content mgt24"><Trans i18nKey="technologies.page.paragraphes[6].text" /></Text>
                        </div>

                        <div className="col-lg-6 col-md-12 spotlight__card">
                            <Title level={3} className="title" >{<Trans i18nKey="technologies.page.paragraphes[7].title" />}</Title>
                            <Title level={4}className="expertise" >{<Trans i18nKey="technologies.page.paragraphes[7].expertise" />}</Title>
                            <Title level={4} className="technologies">{<Trans i18nKey="technologies.page.paragraphes[7].technologies" />}</Title>
                            <Text size="medium" className="content mgt24"><Trans i18nKey="technologies.page.paragraphes[7].text" /></Text>
                        </div>
                        <div className="col-lg-6 col-md-12 spotlight__card">
                            <Title level={3} className="title" >{<Trans i18nKey="technologies.page.paragraphes[8].title" />}</Title>
                            <Title level={4} className="expertise">{<Trans i18nKey="technologies.page.paragraphes[8].expertise" />}</Title>
                            <Title level={4} className="technologies">{<Trans i18nKey="technologies.page.paragraphes[8].technologies" />}</Title>
                            <Text size="medium" className="content mgt24"><Trans i18nKey="technologies.page.paragraphes[8].text" /></Text>
                        </div>
                        <div className="col-lg-6 col-md-12 spotlight__card">
                            <Title level={3} className="title" >{<Trans i18nKey="technologies.page.paragraphes[9].title" />}</Title>
                            <Title level={4} className="expertise">{<Trans i18nKey="technologies.page.paragraphes[9].expertise" />}</Title>
                            <Title level={4} className="technologies">{<Trans i18nKey="technologies.page.paragraphes[9].technologies" />}</Title>
                            <Text size="medium" className="content mgt24"><Trans i18nKey="technologies.page.paragraphes[9].text" /></Text>
                        </div>
                    </Grid>

                    <Container><BorderEffect /></Container>

                    <div className="mgb64 dflex fd-c tech">
                        <Category content={<Trans i18nKey="technologies.category2" />} />
                    </div>
                    <Spotlight className="spotlight__layout">
                        {technologiesPage[0].secondBlock.map((technology, index) => 
                            <SpotlightCard key={index} className="col-lg-4">
                                <TechnologieCard key={index} title={t(technology.title)} text={t(technology.text)}><Icon image={technology.image} size="medium" /></TechnologieCard>
                            </SpotlightCard>
                         )}
                    </Spotlight>
                </Container>
            </Section>

            <Container><BorderEffect /></Container>

            <Section>
                <Container>
                    <ContactBlock />
                    <Address />
                </Container>
            </Section>
        </>
    )
}

export default Technologies;