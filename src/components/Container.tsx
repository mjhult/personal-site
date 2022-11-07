import React, { FC } from "react";

const Container: FC<{ header: string, children?: any, className?: string }> = ({ header, children, className  }) => (
    <div className={ className || 'Container' }>
        <h1>
            { header }
        </h1>
        { children }
    </div>
);

export default Container;