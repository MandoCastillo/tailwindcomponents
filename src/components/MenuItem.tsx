import { FC } from 'react';

interface Props {
  text:string
  link:string
}

export const MenuItem:FC<Props> = ({text,link}) => {
  return (
    <a
      href={link}
      className="block px-4 py-2 text-mdtext-gray-100 hover:text-white hover:bg-gray-600"
    >
      <span className="flex flex-col">
        <span>{text}</span>
      </span>
    </a>
  );
};
