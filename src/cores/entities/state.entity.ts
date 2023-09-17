import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn }

@Entity()
export class State {
    @PrimaryGeneratedColumn('uid')
    id: string;
    
}
