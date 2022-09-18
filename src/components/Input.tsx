import { useState } from 'react';

const Input: React.FC = () => {
    const [inputField, setInputField] = useState('');

    const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        const value = e.target.value;
        setInputField(value.replace(/\D/g, ''));
    };
    return (
        <div className="w-full h-full">
            <input
                type="tel"
                name="inputField"
                value={inputField}
                onChange={onChange}
                className="rounded-md text-3xl font-bold border-2 border-slate-800 px-5 py-2 focus:outline-none focus:ring-2 ring-slate-900 focus:border-slate-700  hover:border-slate-700   transition delay-75 ease-in-out w-full"
            />
        </div>
    );
};

export default Input;
