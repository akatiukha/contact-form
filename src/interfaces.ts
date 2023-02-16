export interface InputTextProps {
  type: string;
  label: string;
  sup?: string;
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
  sup?: string;
}

export interface InputTextAreaProps {
  label: string;
  sup?: string;
}
