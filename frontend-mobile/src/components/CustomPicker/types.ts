import { BottomModalProps } from '../BottomModal';

export type Option<T> = {
  label: string;
  value: T;
};

export interface Props<T> extends BottomModalProps {
  selectedValue: unknown;
  initialValueIndex: number;
  onSelect: (itemIndex: number) => void;
  onSubmit?: (itemIndex: number) => void;
  onReject?: () => void;
  options: Option<T>[];
  modalTitle?: string;
}

export interface Ref {
  focus: () => void;
  blur: () => void;
}
