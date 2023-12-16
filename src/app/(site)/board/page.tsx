import Block from '@/components/Block';
import { getBoardMembers } from '@/sanity/sanity-utils';
import TeamMemberCard from '@/components/TeamMemberCard';
import { TeamMember } from '@/types/TeamMember';
import LinkButton from '@/components/LinkButton';

const TitleRank = {
  President: 1,
  'Vice President': 2,
  Treasurer: 3,
  Secretary: 4,
  Other: 5,
  None: 6,
};

const getTitleRank = (m: TeamMember) => {
  return m.title
    ? TitleRank[m.title]
      ? TitleRank[m.title]
      : TitleRank['Other']
    : TitleRank['None'];
};

export default async function Staff() {
  const team = await getBoardMembers();

  team.sort((a, b) => {
    let order = getTitleRank(a) - getTitleRank(b);
    if (order === 0) {
      order = a.lastName.localeCompare(b.lastName);
      if (order === 0) {
        order = a.firstName.localeCompare(b.firstName);
      }
    }
    return order;
  });

  return (
    <main>
      <Block color={'white'}>
        <h1 className="text-xl mb-4">Our Board</h1>
        {team.map((m, i) => (
          <div key={i} className={'mb-8'}>
            <TeamMemberCard member={m} />
          </div>
        ))}
      </Block>
    </main>
  );
}
