interface ButtonProps {
  title: string;
}

export const Button = ({ title }: ButtonProps) => {
  return <div className="hover:underline text-white">{title}</div>;
};
