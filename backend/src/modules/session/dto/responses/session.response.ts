import { Expose } from 'class-transformer';
import { SessionStatusEnum } from '../../enums/session.enum';

export class SessionResponse {
  @Expose()
  status: SessionStatusEnum;
}
