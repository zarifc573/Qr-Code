"use client";
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { setClientLoginInfo, clearClientLoginInfo } from '@/redux/UserSlice';
import { useRouter } from 'next/navigation';
import { auth } from '@/firebase';
import FormComponent from '@/components/ScannerAndForm';

const User = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const data = useSelector(state => state.clientLoginInfo.clientInfo);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        if (user.emailVerified) {
          dispatch(setClientLoginInfo(user));
          localStorage.setItem('clientLoginInfo', JSON.stringify(user));
        } else {
          router.push('/verification');
        }
      } else {
        dispatch(clearClientLoginInfo());
        localStorage.removeItem('clientLoginInfo');
        router.push('/sign-in');
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [dispatch, router]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="">
        <div className="">
          Main
          <FormComponent/>
          </div>
      </div>
    </div>
  );
};

export default User;
