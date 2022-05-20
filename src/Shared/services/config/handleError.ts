export interface ServerError {
  isError: boolean;
  message: string;
}

const handleError = (errorMessage: string) => ({
  isError: true,
  message: errorMessage,
});

export default handleError;
