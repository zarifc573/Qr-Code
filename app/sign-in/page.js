"use client"
import SignIn from "@/pages/SignIn";
import { Provider } from 'react-redux';
import store from '@/store'

export default function SignInPage() {
    return (
    
      <div>
         <Provider store={store
    }>
        <SignIn/>
    </Provider>
      </div>
    );
  }
  