export type ButtonConfig = {
  condition: boolean;
  label: string;
  action?: () => void;
  type?: "primary" | "link" | "text" | "default" | "dashed"; // 여기에 필요한 타입을 명시
  htmlType?: "button" | "submit" | "reset"; // 여기에 필요한 타입을 명시
};

export interface ButtonGroupProps {
  current: number;
  steps: Array<any>; // steps 타입 정의를 추가할 수 있습니다.
  setCurrent: (current: number) => void;
}
