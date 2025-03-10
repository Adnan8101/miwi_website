import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Support Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/documentation">
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Documentation
                  </a>
                </Link>
              </li>
              <li>
                <a 
                  href="https://discord.gg/miwi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Discord Server
                </a>
              </li>
              <li>
                <Link href="/contact">
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Contact Us
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/terms">
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Terms of Service
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/privacy">
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Privacy Policy
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/cookies">
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Cookie Policy
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog">
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Blog
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/status">
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Status
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/roadmap">
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Roadmap
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about">
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    About Us
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/partners">
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Partners
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/careers">
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Careers
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container py-4 text-center">
          <p className="text-sm text-muted-foreground">
            Made with ❤️ by Miwi team
          </p>
        </div>
      </div>
    </footer>
  );
}