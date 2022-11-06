import Pointer from "../utils/Pointers";
import { ResumeItem } from "../utils/types/ResumeItemTypes";

const educations: ResumeItem[] = [
    {
        title: 'Certification In Software Engineering Candidate',
        subTitle: 'Expected Graduation June 2023',
        content: [
            {
                type: Pointer.None,
                value: 'Codesmith, Remote',
            }
        ]
    },
    {
        title: 'High School Diploma',
        subTitle: 'June 2020',
        content: [
            {
                type: Pointer.None,
                value: 'Next High School, Greenville, South Carolina',
            }
        ]
    },
];

export default educations;