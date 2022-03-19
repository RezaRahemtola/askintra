import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  getRepository,
  PrimaryGeneratedColumn,
  Repository,
} from 'typeorm';

@Entity()
export default class Notification {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  userId!: string;

  @Column()
  keywords!: string;

  @CreateDateColumn()
  createdAt!: Date;

  @DeleteDateColumn()
  deletedAt!: Date;

  static async getRepository(): Promise<Repository<Notification>> {
    return getRepository(Notification);
  }
}
