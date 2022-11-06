import { ReactElement } from 'react';
import Pointer from '../Pointers';

type ResumeItemContent = {
    type: Pointer,
    space?: string,
    size?: string,
    value: string,
}

type ResumeItem = {
    title: string | ReactElement,
    subTitle: string | ReactElement, 
    content?: ResumeItemContent[],
}

export { ResumeItem, ResumeItemContent };