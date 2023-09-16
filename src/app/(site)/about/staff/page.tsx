import Block from '@/components/Block';
import { getStaffMembers } from '@/sanity/sanity-utils';
import TeamMemberCard from '@/components/TeamMemberCard';
import LinkButton from '@/components/LinkButton';

export default async function Staff() {
  let team = await getStaffMembers();
  return (
    <main>
      <Block color={'white'}>
        <LinkButton
          href="/about#team"
          size={'small'}
          icon={'left'}
          variant={'text'}
        >
          ABOUT
        </LinkButton>
        <h1 className="text-xl uppercase mb-4">Our Staff</h1>
        {team.map((m, i) => (
          <TeamMemberCard member={m} key={i} />
        ))}
      </Block>
    </main>
  );
}
