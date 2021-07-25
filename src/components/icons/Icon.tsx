import React from 'react';

const ICON_SIZE = 24;

export interface IconProps {
    size?: number;
}

export type IconType = (props: IconProps) => JSX.Element;

const Icon = (IconComponent: IconType) => () => (
    <IconComponent size={ICON_SIZE} />
)

export default Icon;