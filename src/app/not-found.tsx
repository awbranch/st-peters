import Section from '@/components/Section';
import { H1, Para } from '@/components/Typography';
import { LinkButton } from '@/components/Button';

export default function NotFound() {
  return (
    <Section maxWidth={'sm'} className={'text-center'}>
      <H1 className={'mt-0'}>Page Not Found</H1>
      <Para>The requested page could not be found.</Para>
      <LinkButton
        href="/"
        color={'pink'}
        variant={'solid'}
        className={'mt-5 mb-40'}
      >
        Return Home
      </LinkButton>
    </Section>
  );
}
