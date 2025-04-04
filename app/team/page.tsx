import Image from 'next/image'
import { FaLinkedin } from 'react-icons/fa'
import { type LabMember, labMembers } from '@/lib/lab-members'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Centennial OER Lab - Team',
}

export default function TeamPage() {
  return (
    <div className="px-8 py-12 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">Meet Our Lab Members</h1>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        {labMembers.map((member, i) => (
          <LabMemberCard {...member} key={i} />
        ))}
      </div>
    </div>
  )
}

function LabMemberCard({ name, title, bio, image, website, linkedIn, github }: LabMember) {
  return (
    <div className="flex flex-col gap-2 border rounded-md py-5 px-3">
      <div className="flex flex-col items-center justify-center">
        <div className="overflow-hidden mb-2">
          <Image
            src={image}
            alt={name}
            width={140}
            height={50}
            quality={100}
            className="rounded-full h-[150px] w-[150px] object-cover border"
          />
        </div>
        <Link
          href={website ?? ''}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline text-blue-600 dark:text-blue-400"
        >
          <h3 className="text-xl font-semibold">{name}</h3>
        </Link>
        <p className="text-sm text-muted-foreground">{title}</p>
        <p className="text-sm">{bio}</p>
      </div>
      <div className="w-full space-x-2 text-center">
        {linkedIn && (
          <div className="mt-3 flex justify-center items-center gap-1 text-blue-600 dark:text-blue-400">
            <Link href={linkedIn}>
              <FaLinkedin className="w-8 h-8" />
            </Link>
          </div>
        )}
        {github && (
          <Link href={github} target="_blank" rel="noopener noreferrer" className="text-gray-700 underline">
            GitHub
          </Link>
        )}
      </div>
    </div>
  )
}
