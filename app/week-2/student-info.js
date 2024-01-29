import Link from 'next/link';

const StudentInfo = () => {
  return (
    <div>
      <p>Your Name</p>
      <p>
        GitHub Repository:{' '}
        <Link href="https://github.com/Ameronebeast" target="_blank" rel="noopener noreferrer">
            Rudra Kaint
        </Link>
      </p>
    </div>
  );
};

export default StudentInfo;
