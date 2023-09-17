import { State } from "./state.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn }

@Entity()
export class City {
    @PrimaryGeneratedColumn('uid')
    id: string;

    @Column({ length: 100, nullable: true })
    cityName: string;

    @ManyToOne(() => State, { eager: true })
    @JoinColumn({ name: 'state_id' })
    state: State;

    constructir(id?: string) {
        if (id) {
            this.id = id;
        }
    }

}