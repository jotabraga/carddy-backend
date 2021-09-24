import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import Session from "./Session";
import UsersCard from "./UsersCard";

@Entity("users")
export default class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Session, (session) => session.user)
  sessions: Session[];

  @OneToMany(() => UsersCard, (usersCard) => usersCard.user)
  usersCards: UsersCard[];
}
