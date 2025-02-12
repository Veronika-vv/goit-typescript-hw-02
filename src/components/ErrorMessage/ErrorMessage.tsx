interface ErrorMessageProps {
  message: string;
}

export default function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div style={{ textAlign: "center", color: "red", marginTop: "20px" }}>
      <p>{message}</p>
    </div>
  );
}
