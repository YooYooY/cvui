import React, { FC } from 'react'

interface ICardProps {
    title: string
}

const Card: FC<ICardProps> = (props) => {
    
    return (
      <dl className="cv-card">
        <dt>
          <h3>{props.title}</h3>
        </dt>
        <dd>{props.children}</dd>
      </dl>
    )
}

export default Card
