

type ButtonProps = {
    children: React.ReactNode;
    variant?: "primary" | "secondary";
    onClick?: () => void;
}

export default function Button({
    children,
    variant = "primary",
    onClick
}: ButtonProps) {
    const baseStyles = "px-4 py-2 border rounded-md text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors";

    const variants = {
        primary:
            "bg-white text-black hover:bg-zinc-200",

        secondary:
            "bg-zinc-900 text-white border border-zinc-800 hover:bg-zinc-800",
    };

    return (
        <button className={` ${baseStyles} ${variants[variant]}`} onClick={onClick} >
            {children}
        </button>
    );

}