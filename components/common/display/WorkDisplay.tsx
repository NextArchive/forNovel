import Image from "next/image";

type Props = {
  img: string;
  name: string;
  title: string;
  date: string;
};

export default function WorkDisplay({img, name, title, date}:Props) {
  return (
    <a>
      <div>
        <Image src={img} alt={name} />
      </div>
      <h3>{title}</h3>
      <p>{date}</p>
    </a>
  );
}
