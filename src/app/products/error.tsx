"use client";

import { useEffect } from "react";

type ErrorProps = {
  /**
   * 어떤 에러인지
   */
  error: Error & { digest?: string };
  /**
   *  페이지를 reset 할 수 있는 callback 함수
   */
  reset: () => void;
};

export default function ProductsError({ error, reset }: ErrorProps) {
  useEffect(() => {
    // 클라이언트에서 출력되는 에러 내용
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
