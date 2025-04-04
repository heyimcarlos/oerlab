import LabMemberCard from "@/components/team/LabMemberCard";
import { labMembers } from "@/components/team/lab-members";

export default function TeamPage() {
  return (
    <div className="px-8 py-12 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">Meet Our Lab Members</h1>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {labMembers.map((member, index) => (
          <LabMemberCard key={index} member={member} />
        ))}
      </div>
    </div>
  );
}
