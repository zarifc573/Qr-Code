"use client"
import Link from 'next/link';
import { Provider } from 'react-redux';
import store from '@/store'
export default function Demo() {
  return (
    <Provider store={store
    }>
      
   
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
    </Provider>
  );
}
