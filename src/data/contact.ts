import ContactItem from "../utils/types/ContactTypes";
import Icons from "../utils/Icons";

const contacts: ContactItem[] = [
    {
        icon: Icons.gitHub,
        title: 'Github',
        link: 'https://github.com/mjhult',
    },
    {
        icon: Icons.linkedIn,
        title: 'LinkedIn',
        link: 'https://www.linkedin.com/in/mathew-hultquist/'
    },
    {
        icon: Icons.phone,
        title: '(864) 434-3226',
        link: 'tel:8644343226',
    },
    {
        icon: Icons.mail,
        title: 'mathew@gates.services',
        link: 'mailto:mathew@gates.services',
    },
    {
        icon: Icons.mapPinPoint,
        title: 'Greer, South Carolina',
    },
];

export default contacts;