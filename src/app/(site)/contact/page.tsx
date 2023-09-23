import Block from '@/components/Block';
import { getSettings } from '@/sanity/sanity-utils';
import RichText from '@/components/RichText';
import { TextInput, TextArea, SubmitButton } from '@/components/FormControls';

export default async function Contact() {
  const settings = await getSettings();
  return (
    <main>
      <Block color={'pink'}>
        <div className={'flex flex-row gap-4'}>
          <div className={'basis-10/12'}>
            <h1 className="text-xl uppercase mb-4">
              {settings.contactUsTitle}
            </h1>
            <RichText text={settings.contactUsText} />
            <form>
              <div className={'flex flex-col gap-4 my-4'}>
                <TextInput name={'subject'} title={'Subject'} />
                <TextInput name={'name'} title={'Name'} />
                <TextInput name={'email'} title={'Email'} type={'email'} />
                <TextArea name={'message'} title={'Message'} />
              </div>
              <div className={'text-right'}>
                <SubmitButton />
              </div>
            </form>
          </div>
          <div className={'basis-2/12 bg-pink'}></div>
        </div>
      </Block>
    </main>
  );
}
