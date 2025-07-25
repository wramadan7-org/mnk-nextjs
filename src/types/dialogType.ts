export type DialogProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  confirmButtonText?: string;
  cancelButtonText?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
  icon?: React.ReactNode; // Optional icon for the dialog
};
