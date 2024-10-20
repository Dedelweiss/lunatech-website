import { useTranslation } from 'react-i18next';

import { contactInfos } from '@/constants';

import "./Address.scss";

const Address = () => {
    const { t } = useTranslation();

    return (
        <div className="address">
            {contactInfos.map((contactInfo, index) => (
                <div key={index} className="address__card">
                    <p className="address__title">{t(`${contactInfo.title}`)}</p>
                    <div className="address__part">
                        <p className="address__subtitle">{t(`${contactInfo.subtitle}`)}</p>
                        <div className="address__join">
                            <a className="address__link" href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
                            <span className="address__separate"></span>
                            <a className="address__link" href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</a>
                        </div>
                    </div>
                    {contactInfo.subtitle2 && (
                        <>
                            <div className="address__part">
                                <p className="address__subtitle">{t(`${contactInfo.subtitle2}`)}</p>
                                <a className="address__link" href={`mailto:${contactInfo.careersEmail}`}>{contactInfo.careersEmail}</a>
                            </div>
                            <div className="address__part">
                                <p className="address__subtitle">{t(`${contactInfo.subtitle3}`)}</p>
                                <a className="address__link" href={contactInfo.mapUrl} target="_blank">
                                    <p>{contactInfo.street}</p>
                                    <p>{contactInfo.city}</p>
                                </a>
                            </div>
                        </>
                    )}
                </div>
            ))}
        </div>
    )
}

export default Address;