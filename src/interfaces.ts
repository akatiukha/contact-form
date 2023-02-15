export interface InputTextProps {
  type: string;
  label: string;
  id: string;
  required?: boolean;
  // maxLength: string;
  // pattern: string;
}

export interface InputSelectItem {
  value: string;
  selected: boolean;
}

export interface InputSelectProps {
  options: InputSelectItem[];
  label: string;
}
