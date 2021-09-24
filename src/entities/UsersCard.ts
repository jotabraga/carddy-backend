import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import User from "./User";

@Entity("usersCards")
export default class UsersCard {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  cardId: number;

  @ManyToOne(() => User, (user) => user.usersCards)
  user: User;
}