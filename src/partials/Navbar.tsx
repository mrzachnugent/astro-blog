import {
  Logo,
  NavbarTwoColumns,
  NavMenu,
  NavMenuItem,
  Section,
} from 'astro-boilerplate-components';

const Navbar = () => (
  <Section>
    <NavbarTwoColumns>
      <a href="/">
        <Logo
          icon={
            <img
              src="/assets/images/avatar.jpeg"
              className="mr-2 w-8 rounded-full"
              alt="Avatar"
            />
          }
          name="Zach Nugent"
        />
      </a>

      <NavMenu>
        <NavMenuItem href="/posts">Blog</NavMenuItem>
        <a
          href="https://www.github.com/mrzachnugent"
          target="_blank"
          className="hover:text-white"
        >
          GitHub
        </a>
        <a
          href="https://www.twitter.com/mrzachnugent"
          target="_blank"
          className="hover:text-white"
        >
          Twitter
        </a>
      </NavMenu>
    </NavbarTwoColumns>
  </Section>
);

export { Navbar };
