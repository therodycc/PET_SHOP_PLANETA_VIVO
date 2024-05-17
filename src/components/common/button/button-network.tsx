
import { IconProp } from "@fortawesome/fontawesome-svg-core"
import { IconDefinition,IconPrefix } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { MouseEventHandler } from "react"

interface Props {
    title: string
    description: string
    icon: IconDefinition | any
    onClick: MouseEventHandler<HTMLDivElement> | undefined
}

export const ButtonNetwork = ({ title, description, icon, onClick }: Props) => {
    return (
        <div
            className="info-item d-flex"
            onClick={onClick}
        >
            <FontAwesomeIcon icon={icon} />
            <div>
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
        </div>
    )
}
