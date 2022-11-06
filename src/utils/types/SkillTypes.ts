import { ReactElement } from "react";
import Pointer from "../Pointers";

type SkillItem = {
    pointer: Pointer, 
    space?: string,
    size?: string,
    skill: string | ReactElement,
    // Demo is used for skill demos when the user clicks on the skill.
    // An example would be React. We will have the user click the skill and drop down a button with state.
    demo?: ReactElement,
}

export default SkillItem;