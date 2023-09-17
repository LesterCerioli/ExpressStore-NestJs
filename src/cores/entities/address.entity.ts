import { OneToOne } from "typeorm";
import { City } from './city.entity';
import { District } from './district.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn }

@Entity()
export class Address {
    @PrimaryGeneratedColumn('uid')
    id: string;

    @Column({ nullable: true })
    @IsString()
    @Length(1, 100)
    contactName: string;

    @Column()
    @IsString()
    @Length(1, 450)
    addressLine1: string;

    @OneToOne(() => City, { eager: true }) // Assuming a one-to-one relationship with City
    @JoinColumn()
    city: City;

    @ManyToOne(() => District, { eager: true }) // Assuming a many-to-one relationship with District
    @JoinColumn({ name: 'districtId' })
    district: District;

    @Column()
    @IsUUID()
    districtId: string;


}