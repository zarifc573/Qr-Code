
import Link from 'next/link';

export default function Demo() {
  return (
    <div>
      <h1>Welcome to My App</h1>
      <nav>
        <ul>
          <li>
            <Link href="/sign-in">Sign In</Link>
          </li>
          <li>
            <Link href="/sign-up">Sign Up</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
