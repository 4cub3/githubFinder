import { useState, useCallback } from "react";

const useHttp = () => {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setLoading] = useState<boolean>(false);
  const request = useCallback(
    async (
      requestData: { url: string; method?: string; headers?: {}; body?: string },
      applyData: (a:{items:[]}) => void
    ) => {
      try {
        setLoading(true);
        const response = await fetch(requestData.url, {
          method: requestData.method ? requestData.method : "GET",
          headers: requestData.headers ? requestData.headers : {},
          body: requestData.body ? requestData.body : null,
        });
        if (!response.ok) {
          throw new Error("can't send request");
        }
        setLoading(false);
        const data = await response.json();
        applyData(data);
      } catch (e: any) {
        setLoading(false);
        setError(true);
        setErrorMessage(e.message);
      }
    },
    []
  );
  return {
    error,
    isLoading,
    request,
    errorMessage,
  };
};

export default useHttp;
