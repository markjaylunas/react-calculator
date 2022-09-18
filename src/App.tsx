import Calculator from './components/Calculator';

const App: React.FC = () => {
    return (
        <main className="w-96 mx-auto bg-black text-slate-300 min-h-screen p-5 ">
            <h1 className="text-center font-bold text-3xl ">Calculator</h1>
            <Calculator />
        </main>
    );
};
export default App;
