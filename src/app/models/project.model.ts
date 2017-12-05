import {
  Creatable,
  HasId,
  Voteable,
} from './internal';

export interface Project extends Creatable, Voteable, HasId {
  title: string;
  body?: string;
  category: string;

}
