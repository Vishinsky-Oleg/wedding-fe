import axios, { type AxiosError } from 'axios';
import { useLayoutEffect, useState } from 'react';
import type { TCurrentGuest } from 'types';

export const getCurrentGuest = (userID: string) => {
  const [errorCode, setErrorCode] = useState<number | null>(null);
  const [currentUser, setCurrentUser] = useState<TCurrentGuest | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const getUserFromBE = async () => {
    setIsLoading(true);
    try {
      const currentUser = await axios.get<{ guest: TCurrentGuest }>(
        `http://localhost:3001/api/guest/${userID}`
      );
      if (currentUser.data) {
        setCurrentUser(currentUser.data.guest);
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
