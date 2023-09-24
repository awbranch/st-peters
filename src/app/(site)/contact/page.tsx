import Block from '@/components/Block';
import { getSettings } from '@/sanity/sanity-utils';
import RichText from '@/components/RichText';
import ContactForm from '@/components/ContactForm';

export default async function Contact() {
  const settings = await getSettings();
  return (
    <main>
      <Block color={'pink'}>
        <div className={'flex flex-row gap-4'}>
          <div className={'basis-1/12 bg-pink'}></div>
          <div className={'basis-10/12'}>
            <h1 className="text-xl uppercase mb-4">
              {settings.contactUsTitle}
            </h1>
            <RichText text={settings.contactUsText} />
            <ContactForm />
          </div>
          <div className={'basis-1/12 bg-pink'}></div>
        </div>
      </Block>
    </main>
  );
}
