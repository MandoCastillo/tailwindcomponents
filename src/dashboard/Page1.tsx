import React from 'react';
import { Card } from './Card';

export const Page1 = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
      <Card />
      <Card />
    </div>
  );
};
