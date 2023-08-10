// components/Home.js
import React from 'react';
import DynamicForm from './DynamicForm';

const Home = () => {
  return (
    <div className='mx-auto py-6 bg-slate-300'>
      <h1 className='text-center text-red-700 '>Landing Page!</h1>
      <DynamicForm />
    </div>
  );
};

export default Home;
