import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="w-full max-w-2xl text-xs mx-auto py-4">
      <div className="text-center justify-center items-center ">
        <Link
          href="https://github.com/williamfedele"
          className="p-4 text-muted-foreground hover:text-primary transition-colors"
        >
          github
        </Link>
      </div>
    </footer>
  );
};
