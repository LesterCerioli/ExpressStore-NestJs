import { Email } from "../valueobjects/email";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn }

@Entity()
export class User
{
    @PrimaryGeneratedColumn('uid')
    id: string;
    
    fullName: string;

    email: Email;

}