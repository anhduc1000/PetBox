import utilStyles from "../styles/utils.module.css";
import Image from "next/image";

export default function PostImage() {
  return (
    <div>
      <Image
        priority
        src="/images/cat.jpeg"
        width={400}
        height={400}
        alt="First image"
      />
    </div>
  );
}
