import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from "typeorm";
import Card from "./Card";

@Entity("segments")
export default class Segment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToOne(() => Card, (card) => card.segment)
  card: Card;
}
