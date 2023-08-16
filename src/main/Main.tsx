import * as React from 'react';
import mainStyles from './Main.module.scss'
import containerStyle from "../common/container/Container.module.scss";
import {Home} from "../section/home/Home";
import {Particle} from "../common/components/particles/Particle";

type Props = {};
export const Main = (props: Props) => {

    return (
        <div className={mainStyles.main}>
            <div className={containerStyle.container}>
                <Home/>
            </div>
        </div>
    );
};