import { FC } from 'react';
interface ICardProps {
    title: string;
    type?: 'block' | 'inline';
}
declare const Card: FC<ICardProps>;
export default Card;
