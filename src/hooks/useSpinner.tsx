import { useRecoilState } from 'recoil';
import { loadedStatus } from '../store/global';

export const useSpinner = () => {
  const [loading, setLoading] = useRecoilState(loadedStatus);

  const loadSpinner = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };
  return { loadSpinner };
};
