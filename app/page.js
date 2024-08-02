"use client"
import { Provider } from 'react-redux';
import Demo from "@/pages/Main";
import store from '@/store'
import './globals.css'
export default function Home() {
  return (
    <div>
      <Provider store={store
    }>
      <Demo/>
    </Provider>
    </div>
  );
}
