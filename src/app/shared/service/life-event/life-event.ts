import { Human } from './../family/human';

export class LifeEvent {
  uuid: string;
  year: number;
  familyPerson: Human;
  eventName: string;
  money: number;
  timestamp: Date;
}
