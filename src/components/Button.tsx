interface Props {
    name: number | string | JSX.Element;
}

const Number: React.FC<Props> = ({ name }) => {
    return (
        <button className="rounded-md flex justify-center items-center border-2 border-slate-500 p-2 hover:bg-slate-900 transition delay-75 ease-in-out active:bg-slate-800">
            <p className="font-semibold  font-mono text-xl stroke-1 ">{name}</p>
        </button>
    );
};

export default Number;
