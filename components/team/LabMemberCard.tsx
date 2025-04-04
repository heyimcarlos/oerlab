// components/LabMemberCard.tsx
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";


type LabMember = {
  name: string;
  title: string;
  bio: string;
  image: string;
  linkedin?: string;
  github?: string;
};

export default function LabMemberCard({ member }: { member: LabMember }) {
  return (
    <div className="border p-4 rounded-xl shadow-md bg-white text-center">
      <Image
        src={member.image}
        alt={member.name}
        width={120}
        height={120}
        className="rounded-full mx-auto mb-4"
      />
      <h3 className="text-xl font-semibold">{member.website ? (
          <a
            href={member.website}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-blue-600"
          >
            {member.name}
          </a>
        ) : (
          member.name
        )}</h3>
      <p className="text-gray-500 text-sm">{member.title}</p>
      <p className="text-sm mt-2">{member.bio}</p>
      <div className="mt-3 space-x-2">
        {member.linkedin && (
            <div className="mt-3 flex justify-center items-center gap-1 text-blue-600">
                <FaLinkedin className="w-4 h-4" />
                <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-blue-800 transition-colors"
                >
                LinkedIn
                </a>
            </div>
        )}
        {member.github && (
          <a href={member.github} target="_blank" rel="noopener noreferrer" className="text-gray-700 underline">
            GitHub
          </a>
        )}
      </div>
    </div>
  );
}
