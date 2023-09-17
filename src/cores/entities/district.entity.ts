import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn }


@Entity()
export class District
{
    @PrimaryGeneratedColumn('uuid')
    @IsUUID()
    id: string;

    @Column()
    @IsString()
    @Length(1, 450)
    name: string;

    @Column()
    @IsString()
    @Length(1, 450)
    type: string;

    @Column()
    @IsString()
    @Length(1, 100)
    location: string;

    @ManyToOne(() => State, (state) => state.districts)
    state: State;

    @Column()
    @IsUUID()
    stateId: string;

    constructor(id: string, name: string, type: string, location: string, stateId: string) {
        this.id = id;
        this.name = name;
        this.type = type;
        this.location = location;
        this.stateId = stateId;
    }

    


}