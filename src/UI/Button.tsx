interface ButtonProps {
  title: string;
}

export const Button = ({ title }: ButtonProps) => {
  return <button className="hover:underline text-white">{title}</button>;
};
