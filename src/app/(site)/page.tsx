import RevalidateBlock from '@/components/RevalidateBlock';
import Block from '@/components/Block';

export default async function Home() {
  console.log('>>> Home rendered');
  return (
    <main>
      <Block bg="blue" center>
        <h1>Random number {Math.floor(Math.random() * 1000)}</h1>
      </Block>

      <RevalidateBlock />
    </main>
  );
}
