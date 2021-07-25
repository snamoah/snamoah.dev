import React from 'react';

export interface IconProps {
    size?: number;
}

const Icon = (
    IconComponent: (props: IconProps) => JSX.Element
) => () => (
    <IconComponent size={12} />
)

export default Icon;