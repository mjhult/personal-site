import React, { FC } from "react";
import { AboutItem } from "../utils/types/AboutItem";
import '../styles/components/About.scss';

const AboutItem: FC<AboutItem> = ({ title, icon }) => (
    <div className="AboutItem">
        <div className="Content">
            { icon }
            <h3>
                { title }
            </h3>
        </div>
    </div>
);

export default AboutItem;