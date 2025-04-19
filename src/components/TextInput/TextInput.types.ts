export interface TextInputProps {
     label?: string;
     placeholder?: string;
     value: string;
     onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
     disabled?: boolean;
     error?: boolean;
     helperText?: string;
     className?: string;
   }
   