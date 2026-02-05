export interface ModalProps {
  visible: boolean;
  onClose: () => void;
}

export type ModalType = "login" | "signup" | "forgot-password";
