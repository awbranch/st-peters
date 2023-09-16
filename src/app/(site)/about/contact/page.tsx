import Block from '@/components/Block';
import LinkButton from '@/components/LinkButton';

export default async function Contact() {
  return (
    <main>
      <Block color={'white'}>
        <LinkButton href="/about" size={'small'} icon={'left'} variant={'text'}>
          ABOUT
        </LinkButton>
        <h1 className="text-xl uppercase mb-4">Contact Us</h1>
      </Block>
    </main>
  );
}
