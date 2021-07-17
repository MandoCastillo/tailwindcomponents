import { AcademicCap } from '../assets/icons/svg';
import { MenuItem } from './MenuItem';

export const Menu = () => {
  return (
    <div className="py-2">
      <div className="px-4 mb-2 w-full">
        <AcademicCap />
      </div>
      <MenuItem link="/" text="Usuarios" />
      <MenuItem link="/" text="Entrenamientos" />
    </div>
  );
};
