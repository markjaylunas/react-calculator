import Button from './Button';
import {
    TiTimesOutline,
    TiDivideOutline,
    TiMinusOutline,
    TiPlusOutline,
    TiEqualsOutline,
} from 'react-icons/ti';
import { CgMathPercent } from 'react-icons/cg';

import { FiDelete } from 'react-icons/fi';
const ButtonsLayout: React.FC = () => {
    return (
        <div className="w-full h-full grid grid-cols-4 grid-rows-5 gap-2">
            <Button name="AC" />
            <Button name={<FiDelete />} />
            <Button name="Ans" />
            <Button name={<CgMathPercent />} />
            <Button name={7} />
            <Button name={8} />
            <Button name={9} />
            <Button name={<TiDivideOutline />} />
            <Button name={4} />
            <Button name={5} />
            <Button name={6} />
            <Button name={<TiTimesOutline />} />
            <Button name={1} />
            <Button name={2} />
            <Button name={3} />
            <Button name={<TiMinusOutline />} />
            <Button name="." />
            <Button name={0} />
            <Button name={<TiEqualsOutline />} />
            <Button name={<TiPlusOutline />} />
        </div>
    );
};

export default ButtonsLayout;
