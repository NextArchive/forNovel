import Link from "next/link";

export default function Logo() {
  return (
    <Link href={"/"}>
      <h1
        id="logo"
        className="w-max text-3xl max-mobile_b:text-2xl max-mobile_s:text-xl font-mono"
      >
        NextArchive
      </h1>
    </Link>
  );
}
