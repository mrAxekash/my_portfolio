import * as React from 'react';
import skillsStyle from './Skills.module.css'
import {SectionTItle} from "../../common/components/title/SectionTItle";
import containerStyle from "../../common/container/Container.module.css";
import { Skill } from './skill/Skill';
import reduxIcon from '../../assets/icons/redux.svg'
import htmlIcon from '../../assets/icons/htmlIcon.svg'
import cssIcon from '../../assets/icons/cssIcon.svg'
import jsIcon from '../../assets/icons/jsIcon.svg'
import tsIcon from '../../assets/icons/tsIcon.svg'
import reactIcon from '../../assets/icons/reactIcon.svg'


type Props = {

};
export const Skills = (props: Props) => {


    let htmlDescr = "HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content. Other technologies besides HTML are generally used to describe a web page\'s appearance/presentation (CSS) or functionality/behavior (JavaScript)."
    let cssDescr = "Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media."
    let jsDescr = "JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles."
    let typescriptDescr = "TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale."
    let reactDescr = "React is a JavaScript-based UI development library. Facebook and an open-source developer community run it. Although React is a library rather than a language, it is widely used in web development. The library first appeared in May 2013 and is now one of the most commonly used frontend libraries for web development."
    let reduxDescr = "Redux is a pattern and library for managing and updating application state, using events called \"actions\". It serves as a centralized store for state that needs to be used across your entire application, with rules ensuring that the state can only be updated in a predictable fashion."



    return (
        <section className={skillsStyle.skills}>
            <div className={containerStyle.container}>
                <SectionTItle sectionTitle={'Skills'} header={'I work in ...'}/>
                <div className={skillsStyle.skills_wrapper}>
                    <Skill imgText={"React"} title={"React"} description={reactDescr} icon={reactIcon}/>
                    <Skill imgText={"Redux"} title={"Redux"} description={reduxDescr} icon={reduxIcon} />
                    <Skill imgText={"JS"} title={"JS"} description={jsDescr} icon={jsIcon}/>
                    <Skill imgText={"Typescript"} title={"Typescript"} description={typescriptDescr} icon={tsIcon}/>
                    <Skill imgText={"HTML"} title={"HTML"} description={htmlDescr} icon={htmlIcon} />
                    <Skill imgText={"CSS"} title={"CSS"} description={cssDescr} icon={cssIcon} />
                </div>
            </div>
        </section>
    );
};