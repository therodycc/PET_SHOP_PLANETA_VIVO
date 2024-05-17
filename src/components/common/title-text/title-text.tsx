import React from "react";

interface Props {
    title: string;
    description?: string
}

export const TitleText = ({ title, description }: Props) => {
    return (
        <div className="section-header">
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
};
