import Section from '@/components/Section';
import { H1, Para } from '@/components/Typography';
import Container from '@/components/Container';

export default function EnvPage() {
  return (
    <Container maxWidth={'lg'}>
      <Section>
        <H1>Display Some Env Vars</H1>
        <Para>NODE_ENV={process.env.NODE_ENV}</Para>
        <Para>VERCEL_ENV={process.env.VERCEL_ENV}</Para>
        <Para>VERCEL_URL={process.env.VERCEL_URL}</Para>
        <Para>VERCEL_GIT_REPO_SLUG={process.env.VERCEL_GIT_REPO_SLUG}</Para>
        <Para>NEXT_PUBLIC_VERCEL_ENV={process.env.NEXT_PUBLIC_VERCEL_ENV}</Para>
        <Para>NEXT_PUBLIC_VERCEL_URL={process.env.NEXT_PUBLIC_VERCEL_URL}</Para>
      </Section>
      {/*<Section color={'gray'}>*/}
      {/*  <H1>All Env</H1>*/}
      {/*  <pre>{JSON.stringify(process.env, null, 3)}</pre>*/}
      {/*</Section>*/}
    </Container>
  );
}
