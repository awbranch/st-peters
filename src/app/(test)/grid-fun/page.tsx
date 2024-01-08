import Section from '@/components/Section';

export default function GridFun() {
  return (
    <Section id="foo" narrow={true}>
      <div className={'grid grid-cols-3 gap-4'}>
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className={'bg-gray-400 rounded p-10'}>
            Item {i}
          </div>
        ))}
      </div>
    </Section>
  );
}
