import { User } from './user';

export interface FAQ {
  _id?: String;
  userQ: User;
  question: String;
  userA: User;
  answer: String;
  postingDate: Number;
}
