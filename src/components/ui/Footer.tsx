import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="border-t border-gray-200 py-5">
        <p className="text-sm text-gray-600 text-center">
          Copyright &copy; 2023 Pokemon Card Shop, Inc.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
