import Link from "next/link";
import styles from "./hoverButton.module.css";

type Props = {
  link: string;
  text: string;
};

const HoverButton = ({ link, text }: Props) => {
  return (
    <Link href={link}>
      <div className="group relative w-full h-24 md:h-48 cursor-pointer p-8">
        <div className={styles.cardWrapper}>
          <div className="relative z-10 flex items-center justify-center h-full px-4 text-lg font-bold text-center text-primary   bg-white/60 border border-white/20 backdrop-blur-md shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:bg-white/20 group-hover:text-white">
            {text}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default HoverButton;
