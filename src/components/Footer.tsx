const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
      <div className="px-6 text-center lg:px-16">
        <p className="font-display text-lg italic text-muted-foreground">
          "Building the future one line of code at a time."
        </p>
        <p className="mt-4 font-body text-xs text-muted-foreground">
          © {new Date().getFullYear()} Widad Alagbe. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
