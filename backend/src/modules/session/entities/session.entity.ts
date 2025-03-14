import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseModel } from '../../../libs/database/base.model';
import { SessionStatusEnum } from '../enums/session.enum';
import { User } from '../../user/entities/user.entity';
@Entity()
export class Session extends BaseModel {
  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  user: User;

  @Column({
    enum: SessionStatusEnum,
    default: SessionStatusEnum.ACTIVE,
  })
  status: SessionStatusEnum;
}
