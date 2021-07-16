import { FC } from 'react';
import { IconProps, Loading } from '../assets/icons/svg';

interface Props {
  text: string;
  type?: 'primary' | 'secondary';
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;
  icon?: FC<IconProps>;
  onClick?: () => void;
}

export const Button: FC<Props> = ({
  text,
  onClick,
  type = 'primary',
  disabled = false,
  loading = false,
  fullWidth = false,
  icon: Icon,
}) => {
  const bgDisabled = 'opacity-70 cursor-not-allowed';

  const buttonType = {
    primary: ` bg-blue-600 ${!disabled ? 'hover:bg-blue-700' : bgDisabled}`,
    secondary: `bg-red-600 ${!disabled ? 'hover:bg-red-700' : bgDisabled}`,
  };

  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`py-2 px-4 flex justify-center items-center
        text-white transition ease-in duration-200 
        text-center text-base font-semibold shadow-md rounded-xl
        ${fullWidth ? 'w-full' : 'w-32'}
        ${buttonType[type]}`}
    >
      {loading && <Loading className="animate-spin" />}
      {!loading && Icon && <Icon className="mr-2" />}
      {!loading && text}
    </button>
  );
};
