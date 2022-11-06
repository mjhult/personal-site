import Pointer from "../utils/Pointers";
import React from "react";
import { ResumeItem } from "../utils/types/ResumeItemTypes";

const durationStyle = {
    color: 'grey'
}

const experiences: ResumeItem[] = [
    {
        title: 'Founder',
        subTitle: <p><span style={durationStyle}>December 2020 - Present |</span> Gates Technology, Greer, South Carolina</p>,
        content: [
            {
                type: Pointer.FancyArrow,
                value: 'Carved out vision for evolution of company value to clients.',
            },
            {
                type: Pointer.FancyArrow,
                value: 'Created and watched key performance indicators, keeping strategies on track.',
            },
            {
                type: Pointer.FancyArrow,
                value: 'Developed and maintained business plan focused on specific steps to succeed.',
            },
            {
                type: Pointer.FancyArrow,
                value: 'Marketed brand by building business networks.',
            },
            {
                type: Pointer.FancyArrow,
                value: 'Aligned product and service plans with company vision to formulate objectives.',
            },
            {
                type: Pointer.FancyArrow,
                value: 'Implemented budgetary control systems to support cost-reduction and budget adherance.',
            },
            {
                type: Pointer.FancyArrow,
                value: 'Gave presentations at meeting and conventions to promote services and offerings.',
            },
        ]
    },

    {
        title: 'Lead Farm Hand',
        subTitle: <p><span style={durationStyle}>June 2021 - Present |</span> Y Knot Farms, Greer, South Carolina</p>,
        content: [
            {
                type: Pointer.FancyArrow,
                value: 'Moved equipment, poultry, and livestock from one location to another, manually and using trucks and carts.',
            },
            {
                type: Pointer.FancyArrow,
                value: 'Developed plans and schedules for produce harvest, planting, and field preparations.',
            },
            {
                type: Pointer.FancyArrow,
                value: 'Ensured soil pH, nutrients, and moisture remain within accetable range.',
            },
            {
                type: Pointer.FancyArrow,
                value: 'Drove trucks, tractors, and other equipment to distribute feed to animals.',
            },
            {
                type: Pointer.FancyArrow,
                value: 'Inspected, maintained, and repaired equipment, machinery, pens, yards, and fences.',
            },
            {
                type: Pointer.FancyArrow,
                value: 'Fed and watered livestock and monitored food and water supplies.',
            },
            {
                type: Pointer.FancyArrow,
                value: 'Collected and packaged eggs in cartons for storage or sale.',
            },
            {
                type: Pointer.FancyArrow,
                value: 'Developed guidelines for harvests, livestock management/feeding, soil fertilization, etc.',
            },
        ]
    },

    {
        title: 'Tech Sales Associate',
        subTitle: <p><span style={durationStyle}>July 2019 - December 2020 |</span> Staples, Greenville, South Carolina</p>,
        content: [
            {
                type: Pointer.FancyArrow,
                value: 'Answered customers\'s questions about products, prices, availability, and credit terms.',
            },
            {
                type: Pointer.FancyArrow,
                value: 'Maintained customer records using automated systems.',
            },
            {
                type: Pointer.FancyArrow,
                value: 'Handled currency in a fast paced environment.',
            },
            {
                type: Pointer.FancyArrow,
                value: 'Provided customers information for add-on warranties for various products.',
            },
            {
                type: Pointer.FancyArrow,
                value: 'Performed repairs and upgrades on Windows and IOS devices.',
            },
        ]
    },

];

export default experiences;