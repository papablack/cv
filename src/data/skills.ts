import { Skill, SkillLevel } from '../types';
import skillsData from '../../data_source/skills.json';

export const skills: Skill[] = skillsData.skills.map(skill => ({
  name: skill.name,
  level: skill.level as SkillLevel
}));
