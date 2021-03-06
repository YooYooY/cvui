import React, { FC } from 'react'
import useClassName from '../../hooks/useClassName'

interface ICardProps {
  title: string
  type?: 'block' | 'inline'
}

const Card: FC<ICardProps> = (props) => {
  const { title, children, type } = props

  const classes = useClassName('cv-card', type)
  
  return (
    <div className={classes}>
      <dl>
        <dt>
          <h3>{title}</h3>
        </dt>
        <dd>{children}</dd>
      </dl>
    </div>
  )
}

Card.defaultProps = {
  type: 'block',
}

export default Card
