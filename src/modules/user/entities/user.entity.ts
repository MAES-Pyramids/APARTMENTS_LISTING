import { Entity, Column } from 'typeorm';
import { BaseModel } from '@libs/database/base.model';
import { DeepPartial } from '@libs/types/deep-partial.type';
import { UserRoleEnum } from '../enums/user.enum';
import { LangEnum } from '../../../libs/enums/language-code.enum';

@Entity()
export class User extends BaseModel {
  constructor(input?: DeepPartial<User>) {
    super(input);
  }
  @Column({ type: 'text' })
  firstName: string;

  @Column({ type: 'text' })
  lastName: string;

  @Column({
    unique: true,
    nullable: true,
    transformer: {
      from: (val: string) => (val ? val.toLowerCase() : val),
      to: (val: string) => val,
    },
  })
  verifiedEmail: string;

  @Column()
  password: string;

  @Column({ enum: UserRoleEnum })
  role: UserRoleEnum;

  @Column({ default: false })
  isBlocked?: boolean;

  @Column({ nullable: true })
  lastSeenAt?: Date;

  @Column({ enum: LangEnum, default: LangEnum.EN })
  favLang: LangEnum;

  @Column({ nullable: true })
  securityGroupId?: string;
}
