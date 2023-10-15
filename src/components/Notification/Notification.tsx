interface Props {
  message: string;
}

export const Notification = ({ message }: Props) => {
  return <p>{message}</p>;
};
