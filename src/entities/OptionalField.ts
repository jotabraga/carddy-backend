import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import Card from './Card';

@Entity("optionalFields")
export default class OptionalField {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    cardId: number;

    @Column()
    key: string;

    @Column()
    value: string;

    @ManyToOne(() => Card, (card) => card.optionalFields)
    card: Card;
}