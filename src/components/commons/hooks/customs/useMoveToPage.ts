import { useRouter } from "next/router";

/*
  고차함수 - 다른 함수를 반환하거나 함수를 인자로 받는 함수
  moveToPage는 url을 인자를 받고 또다른 함수를 반환하는데
  반환하는 함수는 ()=> router.push(url)이다

  이렇게 고차함수를 사용하게 되면 첫번째 함수에서 url값을 저장하고
  두번째 함수는 router.push(url)을 실행한다

  react onClick의 원리
  onClick에서 즉시 실행되는 함수와 나중에 실행되는 함수의 차이
  onClick에 함수를 바인딩할때 ()를 붙이게 되면 즉시 실행 함수로 실행이 되어버리는데
  즉시 실행함수가 되면 렌더링 시점에 동작하기 때문에 필요한 시점에 동작 시킬수가 없게 된다.

  그래서 매개변수를 전달하기 위해서 고차 함수 방식을 사용하게 되는데
  고차함수로 호출하게 되면 렌더링시에 moveToPage(url)이 호출된다
  이 함수는 router.push를 반환하는 함수인데
  이렇게 반환된 router.push가 onClick에 바인딩 된것처럼 동작한다.

  따라서 onClick에서 ()가 달리거나 매개변수를 전달할때는 고차함수를 사용해서
  클릭되는 시점에만 반환하는 함수가 실행될 수 있게 해줘야 한다. 10/17
*/
export default function useMoveToPage() {
  const router = useRouter();

  const moveToPage = (url: string) => () => {
    router.push(url);
  };

  return { moveToPage };
}
