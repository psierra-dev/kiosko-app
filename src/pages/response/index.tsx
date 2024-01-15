import Response from "@components/General/Response/Response";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const ResponsePage = () => {
  const router = useRouter();

  const { state } = router.query;

  console.log(router.query, "state response");

  /*useEffect(() => {
    if (!state) {
      router.replace("/comercio");
    }
  }, [state]);*/
  return (
    <main>
      <Response state={state as TStatus} />
    </main>
  );
};

export default ResponsePage;
