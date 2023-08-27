import Block from '@/components/Block';
import Page from '@/components/Page';

export default function Home() {
  return (
    <main>
      <Block bg="blue" center>
        <h2 className="text-xl uppercase mb-1">What’s for Lunch?</h2>
        <p>Monday through Friday - Noon to 2:00 PM</p>
        <p>681 Brown St. Rochester, NY</p>
        <div className="text-black mt-4 md:mt-8">
          <Page>
            <h3 className="text-lg">Monday</h3>
            <caption className="block text-sm">Today</caption>
          </Page>
        </div>
      </Block>
    </main>
  );
}
