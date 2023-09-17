import { OneToMany } from "typeorm";
import { State } from './state.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn }


@Entity()
export class Country {
    @PrimaryGeneratedColumn('uid')
    id: string;

    @Column({ length: 100, nullable: true })
    coutryName: string;

    @Column({ nullable: true })
    @IsString()
    @Length(1, 450)
    code3: string;

    @Column({ nullable: true })
    @IsOptional()
    @IsBoolean()
    isBillingEnabled: boolean;

    @Column({ nullable: true })
    @IsOptional()
    @IsBoolean()
    isShippingEnabled: boolean;

    @Column({ default: true }) // Assuming a default value of true
    @IsOptional()
    @IsBoolean()
    isCityEnabled: boolean;

    @Column({ default: true }) // Assuming a default value of true
    @IsOptional()
    @IsBoolean()
    isZipCodeEnabled: boolean;

    @Column({ default: true }) // Assuming a default value of true
    @IsOptional()
    @IsBoolean()
    isDistrictEnabled: boolean;

    @OneToMany(() => State, (state) => state.country)
    states: State[];

}