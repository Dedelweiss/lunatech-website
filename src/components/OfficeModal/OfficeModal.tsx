import { useTranslation, Trans } from "react-i18next";
import ButtonPrimary from '@components/ButtonPrimary/ButtonPrimary';
import Text from '@components/Text/Text';
import Category from "@components/Category/Category";
import Title from "@components/Title/Title";
import "./OfficeModal.scss";
import { closeIcon, emailIcon, flagIcon, homeIcon, messageIcon, peopleIcon, phoneIcon, profileIcon } from "@/assets";
import { useRef } from "react";

interface ModalProps {
    title: string;
    image: string;
    developers?: number;
    otherJobs?: number;
    email?: string;
    phone?: string;
    careersEmail?: string;
    address?: string;
    country?: string;
    children: JSX.Element;
    handleClose: () => void;
}

const OfficeModal = (props: ModalProps) => {
    const { t } = useTranslation();
    const boundingRef = useRef<DOMRect | null>(null);

    const handleMouseEnter = (ev: React.MouseEvent<HTMLDivElement>) => {
        boundingRef.current = ev.currentTarget.getBoundingClientRect();
    }

    const handleMouseLeave = () => {
        boundingRef.current = null;
    }

    const handleMouseMove = (ev: React.MouseEvent<HTMLDivElement>) => {
        if (!boundingRef.current) return;
        const x = ev.clientX - boundingRef.current?.left;
        const y = ev.clientY - boundingRef.current.top;
        const xPercent = x / boundingRef.current.width;
        const yPercent = y / boundingRef.current.height;
        const xRotation = (xPercent - 0.5) * 20;
        const yRotation = (0.5 - yPercent) * 20;

        ev.currentTarget.style.setProperty('--x-rotation', `${yRotation}deg`);
        ev.currentTarget.style.setProperty('--y-rotation', `${xRotation}deg`);
    }
    
    return (
    <div className='office-modal'>
        <div onClick={props.handleClose} className="overlay"></div>
        <div className='office-modal__content'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}>
            <button className="office-modal__close-btn" type="button" onClick={props.handleClose}><img src={closeIcon} alt="Add" /></button>
       
            <div className="office-modal__image">
                <img src={props.image} alt="" />
            </div>

            <div className="office-modal__body">
                <div className='office-modal__header'>
                    {props.children}
                    <div className="mgl24">
                        <Category content={<Trans i18nKey="officeModal.subtitle" />} />
                        <Title level={2}><span>{t(props.title)}</span></Title>
                    </div>
                </div>

                <div className="office-modal__image-sp">
                    <img src={props.image} alt="" />
                </div>
            
                <div className='office-modal__info'>
                    <div>
                        <div className="office-modal__category">
                                <Text size="large" className="mgb8">{t('officeModal.employee')}</Text>
                                <p className="office-modal__entry"><img src={peopleIcon} alt="" />{props.developers} {t('officeModal.softwareDevelopers')}</p>
                                <p className="office-modal__entry"><img src={profileIcon} alt="" />{props.otherJobs} {t('officeModal.otherJobs')}</p>
                            </div>  
                        {(props.email && props.phone) && (
                            <div className="office-modal__category">
                                <Text size="large" className="mgb8">{t('officeModal.business')}</Text>
                                <p className="office-modal__entry">
                                    <img src={emailIcon} alt="" />{props.email}
                                    <span>|</span>
                                    <img src={phoneIcon} alt="" />{props.phone}
                                </p>
                            </div>
                        )}
                        {(props.careersEmail) && (
                            <div className="office-modal__category">
                                <Text size="large" className="mgb8">{t('officeModal.careers')}</Text>
                                <p className="office-modal__entry"><img src={emailIcon} alt="" />{props.careersEmail}</p>
                            </div>  
                        )}
                        {(props.address && props.country) && (
                            <div className="office-modal__category">
                                <Text size="large" className="mgb8">{t('officeModal.address')}</Text>
                                <p className="office-modal__entry"><img src={homeIcon} alt="" />{props.address}</p>
                                <p className="office-modal__entry"><img src={flagIcon} alt="" />{t(props.country)}</p>
                            </div>
                        )}
                    </div>
                    <div className="office-modal__contact-btn">
                        <ButtonPrimary iconUrl={messageIcon} size='large' to='/contact'>
                                <span>
                                    {t('modal.contactUsBtn')}
                                </span>
                        </ButtonPrimary>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default OfficeModal;