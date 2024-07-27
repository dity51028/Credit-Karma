type RequestParams = {
    path: string;
    queryParams?: Record<string, string>;
    body?: {
      [key: string]: unknown;
    };
    method: "GET" | "POST" | "PUT" | "DELETE"; // Add more methods as needed
  };
  interface BackendResponseType<T> extends Response {
    success: boolean;
    message: string;
    data?: T;
  }
  export const generateRequest = async <T>(
    params: RequestParams,
  ): Promise<T | undefined> => {
    const { path, queryParams, body, method } = params;
    const url = new URL("http://localhost:8080/api/v1/" + path);
    if (queryParams) {
      Object.keys(queryParams).forEach((key) =>
        url.searchParams.append(key, queryParams[key]),
      );
    }
    const options: RequestInit = {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      ...(method !== "GET" && body && { body: JSON.stringify(body) }),
    };
    console.log(options);
    const response = await fetch(url.toString(), options);
    
    if (!response.ok) {
      throw new Error(`HTTP Error! Status : ${response.status}`);
    }
    const result: BackendResponseType<T> = await response.json();
    if (!result.success) {
      throw new Error(result.message);
    }
    return result.data;
  };