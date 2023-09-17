import { MediaType } from "../enums/mediaType.enum";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn }

@Entity()
export class Media
{
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ nullable: true })
    @IsString()
    @Length(1, 450)
    caption: string;

    @Column({ nullable: true })
    @IsNumber()
    fileSIze: number;

    @Column({ nullable: true })
    @IsString()
    @Length(1, 450)
    fileName: string;

    @Column({ type: 'enum', enum: MediaType })
    @IsEnum(MediaType)
    mediaType: MediaType;

    constructor(id: string, caption: string | null, fileSize: number | null, fileName: string | null, mediaType: MediaType) {
        this.id = id;
        this.caption = caption || null;
        this.fileSIze = fileSize || null;
        this.fileName = fileName || null;
        this.mediaType = mediaType;
    }

}