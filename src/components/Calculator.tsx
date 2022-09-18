import React, { useState } from 'react';
import ButtonsLayout from './ButtonsLayout';
import Input from './Input';

const Calculator: React.FC = () => {
    return (
        <div className="rounded-lg flex flex-col items-center justify-center gap-5 w-80 mx-auto my-5 border border-slate-500 px-5 py-10">
            <Input />
            <ButtonsLayout />
        </div>
    );
};

export default Calculator;
