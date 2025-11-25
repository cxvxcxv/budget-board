import toast from 'react-hot-toast';

export function fail(msg: string): never {
  toast.error(msg);
  throw new Error(msg);
}
