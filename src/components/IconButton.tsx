import { FC } from 'react';
import { IconProps } from '../assets/icons/svg';

interface Props {
  icon: FC<IconProps>;
  onClick?: () => void;
}

export const IconButton: FC<Props> = ({ icon: Icon, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex p-2 items-center rounded-full bg-white shadow text-gray-400 hover:text-gray-700"
    >
      <Icon />
    </button>
  );
};
