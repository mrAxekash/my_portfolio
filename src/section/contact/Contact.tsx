import * as React from 'react';
import contactStyle from './Contact.module.scss'
import containerStyle from "../../common/container/Container.module.css";
import TextField from '@mui/material/TextField/TextField';

type Props = {

};
export const Contact = (props: Props) => {
    return (
        <section className={contactStyle.contact}>
            <div className={containerStyle.container}>
                <h2 className={contactStyle.title}>
                    Contact me
                </h2>
                <div className={contactStyle.formStyle}>
                    <form action="#" className={contactStyle.formWrapper}>
                        <label form={'name'}>What is Your Name:</label>
                        <TextField variant="standard" fullWidth  />
                        <label form={'email'}>Your Email Address:</label>
                        <TextField variant="standard" fullWidth />
                        <label form={'help'}>How can I Help you?:</label>
                        <TextField
                            id="standard-multiline-static"
                            multiline
                            rows={4}
                            size={"medium"}
                            variant="standard"
                            fullWidth
                        />
                        <button className={contactStyle.button}> Send  &#8594; </button>
                    </form>
                </div>

            </div>
        </section>
    );
};