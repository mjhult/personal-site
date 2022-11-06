import React, { FC, ReactElement } from 'react';
import ContactItem from '../utils/types/ContactTypes';

const ContactItem: FC<ContactItem> = ({ icon, link, title }) => (
    <div className="ContactItem">
        <span>
            { icon }
        </span>
        <span>
            <a href={ link || '#' }>{ title }</a>
        </span>
    </div>
);

export default ContactItem;