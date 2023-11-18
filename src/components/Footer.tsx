const Footer = () => {
  const today = new Date();

  return (
    <footer className="text-gray-400 border-t border-gray-600">
      <div className="container mx-auto flex items-center justify-center">
        <p className="text-xs">
          Copyright &copy; {today.getFullYear()} Next-Sanity-Blog. All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
