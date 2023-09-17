import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn }


@Entity()
export class Vendor
{
    @PrimaryGeneratedColumn('uid')
    id: string;

}