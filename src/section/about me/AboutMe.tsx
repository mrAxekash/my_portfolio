import * as React from 'react';
import containerStyle from "../../common/container/Container.module.scss";
import aboutMeStyle from './AboutMe.module.scss'
import {SectionTItle} from "../../common/components/title/SectionTItle";
import {AbloutMeBlock} from "../../common/components/aboutMeBlock/AbloutMeBlock";
import {AttentionSeeker, Fade} from "react-awesome-reveal";

type Props = {};
export const AboutMe = (props: Props) => {
    return (
        <section className={aboutMeStyle.aboutMe} id={'aboutMe'}>
            <div className={containerStyle.container} >
                <Fade direction={'up'} triggerOnce={true} >
                    <SectionTItle sectionTitle={'About me'} header={'Know me more'} textColor={'black'} />
                </Fade>

                <Fade direction={'up'} triggerOnce={true}>
                    <div className={aboutMeStyle.wrapperBlock1}>
                        <div className={aboutMeStyle.wrapper_description}>
                            <h2>Hi, I'm <span>Alexandr Kuchutkov</span></h2>
                            <p>
                                I'm a frontend developer with a passion for the frontend. I enjoy developing simple, and
                                slick websites and app. My strengths are curious (любопытный), creative, observant
                                (наблюдательный), determined (решительный) and active. I delivering work within time and
                                budget which meets client's requirements is our moto.
                            </p>
                        </div>
                        <div className={aboutMeStyle.wrapper_box}>
                            {/*<div>*/}
                            <div>
                                <AttentionSeeker effect={'pulse'} delay={1500} triggerOnce={true}>

                                    <AttentionSeeker effect={'pulse'} delay={500} triggerOnce={true}>
                                                <span>
                                                1
                                                </span>
                                    </AttentionSeeker>

                                </AttentionSeeker>

                            </div>
                            {<AttentionSeeker effect={'rubberBand'} delay={2500} triggerOnce={true}>
                                <h3>Years of <span>Experiance</span></h3>
                            </AttentionSeeker>}
                        </div>

                    </div>
                </Fade>
                <Fade direction={'up'} triggerOnce={true}>
                    <div className={aboutMeStyle.wrapperBlock2}>
                        <AbloutMeBlock title={'Name'} blockText={'Alexandr Kuchutkov'}/>
                        <AbloutMeBlock title={'Email'} blockText={'kashim007@mail.ru'}/>
                        <AbloutMeBlock title={'Date of birth'} blockText={'14 February, 1991'}/>
                        <AbloutMeBlock title={'From'} blockText={'Minsk, Belarus'}/>
                    </div>
                </Fade>
            </div>
        </section>
    );
};