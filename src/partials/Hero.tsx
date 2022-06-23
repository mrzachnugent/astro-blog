import {
  GradientText,
  HeroAvatar,
  Section,
} from 'astro-boilerplate-components';

const ICON_SIZE = 60;

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I'm <GradientText>Zach</GradientText> 👋
        </>
      }
      description={
        <>
          I'm the lead mobile developer for{' '}
          <a
            className="text-cyan-400 hover:underline"
            href="https://usewalter.com"
            target="_blank"
          >
            UseWalter
          </a>
          {'. '}
          We use TypeScript, GraphQL, and most importantly{' '}
          <a
            className="text-cyan-400 hover:underline"
            href="https://www.expo.dev"
            target="_blank"
          >
            Expo
          </a>
          {'. '}I use this static website to share my thoughts and my personal
          projects.
        </>
      }
      avatar={
        <img
          className=" w-72"
          src="/assets/images/avatar.png"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a
            href="https://www.twitter.com/mrzachnugent"
            target="_blank"
            className="transition ease-in-out hover:opacity-90"
          >
            <img
              src="/assets/images/twitter-icon.png"
              alt="Twitter icon"
              width={ICON_SIZE}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/mrzachnugent/"
            target="_blank"
            className="transition ease-in-out hover:opacity-90"
          >
            <img
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
              width={ICON_SIZE}
            />
          </a>
          <a
            href="https://www.youtube.com/channel/UCQuGrbe-Ghlndb4BZ22Eeug"
            target="_blank"
            className="transition ease-in-out hover:opacity-90"
          >
            <img
              src="/assets/images/youtube-icon.png"
              alt="Youtube icon"
              width={ICON_SIZE}
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
