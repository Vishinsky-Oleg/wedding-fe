import axios, { type AxiosError } from 'axios';
import { useLayoutEffect, useState } from 'react';

export type TCurrentGuest = {
  _id: string;
  name: string;
  isPolled: boolean;
  withC: boolean;
  gen: 's' | 'h' | 't';
  res: boolean;
  createdAt: number;
};

export const getCurrentGuest = (userID: string) => {
  const [errorCode, setErrorCode] = useState<number | null>(null);
  const [currentUser, setCurrentUser] = useState<TCurrentGuest | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const getUserFromBE = async () => {
    setIsLoading(true);
    try {
      const currentUser = await axios.get<TCurrentGuest>(
        `http://localhost:3001/api/guest/${userID}`
      );
      if (currentUser.data) {
        setCurrentUser(currentUser.data);
        console.log(currentUser.data);
      }
    } catch (error) {
      const axiosError = error as AxiosError;
      axiosError.status && setErrorCode(axiosError.status);
    } finally {
      setIsLoading(false);
    }
  };

  useLayoutEffect(() => {
    getUserFromBE();
  }, [userID]);

  return { errorCode, currentUser, isLoading };
};
