import React, { FC } from "react";
import ContactItem from "../components/ContactItem";
import contacts from "../data/contact";

const Contact: FC<{ header?: string }> = ({ header }) => (
    <div className="ContactContainer">
        <h2>
            { header || 'Contact' }
        </h2>
        <div className="Contacts">
            { contacts.map((contact, i) => (
                <ContactItem key={i} icon={contact.icon} title={contact.title} link={contact.link} />
            ))}
        </div>
    </div>
);

export default Contact;