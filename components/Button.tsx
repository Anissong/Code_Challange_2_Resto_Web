import Image from "next/image";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant: "btn_dark_green";
};

const Button = ({ type, title, icon, variant }: ButtonProps) => {
  return (
    <button className={`flexCenter ${variant} rounded-full gap-3 `} type={type}>
      {icon && <Image src={icon} alt={title} width={20} height={20} />}
      <label className="bold-16 whitespace-nowrap">{title}</label>
    </button>
  );
};

export default Button;
