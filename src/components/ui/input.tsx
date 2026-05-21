type InputProps = {
    placeholder?: string;
    type?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export default function Input({
    placeholder,
    type ="text",
    value,
    onChange
}: InputProps){
    return (
        <input type={type} placeholder={placeholder} value={value} onChange={onChange} className="w-full border border-zinc-700 bg-zinc-900 hover:bg-zinc-800 transition-colors text-zinc-300 hover:text-white rounded-lg p-3 font-semibold cursor-pointer text-sm text-center" />
    );
}