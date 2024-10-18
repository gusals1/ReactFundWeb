import { useRef, useState } from "react";
import { Steps, Button, Form, Input } from "antd";
import * as S from "./FundItem.styles";
import { steps } from "./steps/stepAll";
import ButtonGroup from "./itemBtn/ItemButton";

const { Step } = Steps;

// 스타일 정의

export default function FundItem() {
  const [current, setCurrent] = useState(0); // 현재 단계
  const [formValues, setFormValues] = useState({}); // 각 단계의 입력 값 저장
  // getDebounce 구현
  // useRef => 렌더링 주기와 관계없이 유지되는 값이나 변수를 관리할때 사용하는 hook 값이 바껴도 리렌더링 없이 값을 유지할수 있어서 사용
  const debounceTimeout = useRef<NodeJS.Timeout | null>(null); // NodeJS.Timeout => setTimeout함수들의 타이머 ID의 타입값

  const onValuesChange = (changedValues: any, allValues: any) => {
    // 입력이 발생할때마다 setTimeout이 동작하지만 다음 입력이 들어오면 clear하고 마지막 입력이 들어오면
    // clear하지 않기 때문에 0.5뒤에 값을 설정하는것이 가능해진다.
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }
    debounceTimeout.current = setTimeout(() => {
      setFormValues({ ...formValues, ...allValues });
    }, 500);
  };

  const onFinish = () => {
    console.log("Final Form values:", formValues);
    // 최종 제출 로직
  };

  return (
    <S.Wrapper>
      <S.Sidebar>
        <Steps current={current} direction="vertical">
          {steps.map((step, index) => (
            <Step key={index} title={step.title} />
          ))}
        </Steps>
      </S.Sidebar>

      <S.Content>
        <Form
          onValuesChange={onValuesChange} // 값이 변경될 때마다 호출
          onFinish={onFinish} // 제출 시 호출
          initialValues={formValues} // 현재 상태를 초기 값으로 설정
          layout="vertical"
        >
          {steps[current].content}

          <S.ButtonGroup>
            <ButtonGroup
              current={current}
              steps={steps}
              setCurrent={setCurrent}
            />
          </S.ButtonGroup>
        </Form>
      </S.Content>
    </S.Wrapper>
  );
}
