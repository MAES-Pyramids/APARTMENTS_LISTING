import { ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";

interface Option {
    label: string;
    value: string;
}

interface DropdownProps {
    label: string,
    options: Option[];
    selected: Option | null;
    onSelect: (option: Option) => void;
    placeholder?: string;
}

const Dropdown: React.FC<DropdownProps> = ({ label, options, selected, onSelect, placeholder = "Select an option" }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="relative min-w-[200px] flex-1" ref={dropdownRef}>
            <div className="flex flex-col align-items-start gap-y-1">
                <span className="text-gray-600 capitalize">
                    {label}
                </span>

                <button
                    className="w-full px-4 py-2 border border-gray-500 text-gray-600 rounded-sm bg-white text-left flex justify-between items-center cursor-pointer"
                    onClick={() => setIsOpen((prev) => !prev)}
                >
                    {selected ? selected.label : placeholder}

                    <ChevronDown  size={16} className="ml-2"/>
                </button>
            </div>

        {/* Dropdown Menu */}
        {isOpen && (
            <ul className="absolute left-0 mt-2 w-full border border-gray-500 rounded-sm bg-white shadow-md max-h-48 overflow-auto">
            {options.map((option) => (
                <li
                key={option.value}
                className={`px-4 py-2 cursor-pointer hover:bg-gray-100 text-gray-600
                    ${ selected?.value === option.value && "bg-gray-200"}
                `}
                onClick={() => {
                    onSelect(option);
                    setIsOpen(false);
                }}
                >
                {option.label}
                </li>
            ))}
            </ul>
        )}
        </div>
    );
};

export default Dropdown;
