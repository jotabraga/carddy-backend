import { Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne } from "typeorm";
import OptionalField from "./OptionalField";
import Segment from "./Segment";

@Entity("cards")
export default class Card {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  picture: string;

  @Column()
  qrCode: string;

  @Column()
  segmentId: number;

  @OneToOne(() => Segment, (segment) => segment.card)
  segment: Segment;

  @OneToMany(() => OptionalField, (optionalField) => optionalField.card)
  optionalFields: OptionalField[];
}
