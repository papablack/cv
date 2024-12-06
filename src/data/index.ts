import { CVData } from '../types';
import { personal } from './personal';
import { professionalSummary } from './professionalSummary';
import { experience } from './experience';
import { earlierPositions } from './earlierPositions';
import { skills } from './skills';
import { education } from './education';
import { languages } from './languages';
import { projects } from './projects';

export const cvData: CVData = {
  personal,
  professionalSummary,
  experience,
  earlierPositions,
  skills,
  education,
  languages,
  projects
};
