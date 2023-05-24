import * as React from 'react';
import mainStyles from './Main.module.css'
import containerStyle from "../common/container/Container.module.css";
import {Home} from "../section/home/Home";

type Props = {

};
export const Main = (props: Props) => {
    return (
        <div className={mainStyles.main}>
            <div className={containerStyle.container}>
                <Home />
            </div>
        </div>
    );
};