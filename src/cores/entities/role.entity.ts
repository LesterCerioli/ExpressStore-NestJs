import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn }


@Entity()
export class Role
{
    @PrimaryGeneratedColumn('uid')
    id: string;

}