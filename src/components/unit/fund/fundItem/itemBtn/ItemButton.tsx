import { Button } from "antd";
import { ButtonConfig, ButtonGroupProps } from "./itemButton.type";

export default function ButtonGroup({
  current,
  steps,
  setCurrent,
}: ButtonGroupProps) {
  const buttonConfig: ButtonConfig[] = [
    {
      condition: current > 0,
      label: "이전",
      action: () => setCurrent(current - 1),
    },
    {
      condition: current < steps.length - 1,
      label: "다음",
      type: "primary",
      action: () => setCurrent(current + 1),
    },
    {
      condition: current === steps.length - 1,
      label: "만들기",
      type: "primary",
      htmlType: "submit",
    },
  ];

  return (
    <>
      {buttonConfig
        .filter((button) => button.condition)
        .map((el, index) => (
          <Button
            key={index}
            type={el.type}
            htmlType={el.htmlType}
            onClick={el.action}
          >
            {el.label}
          </Button>
        ))}
    </>
  );
}
