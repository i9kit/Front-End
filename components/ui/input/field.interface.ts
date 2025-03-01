import { InputHTMLAttributes } from "react";
import { IconType } from "react-icons";

export interface IField extends InputHTMLAttributes<HTMLInputElement> {
    placeholder: string
    Icon?: IconType
    error?: string
}

export interface IAuthField{
    label: string;
    name: string;
    placeholder: string;
    value: string | number;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    type?: string;
    as?: 'input' | 'textarea';
    required?: boolean;
    className?: string;
}