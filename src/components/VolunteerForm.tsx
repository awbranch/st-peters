'use server';

import { VolunteerForm as Props } from '@/types/VolunteerForm';
import VolunteerFormClient from '@/components/VolunteerFormClient';

export default async function VolunteerForm({ _key, palette }: Props) {
  // Strip the email out of the VolunteerForm that it doesn't leak to the client
  return <VolunteerFormClient formKey={_key} palette={palette} />;
}
