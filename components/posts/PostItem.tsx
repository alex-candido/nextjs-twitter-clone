import { useRouter } from 'next/router';
import { useCallback } from 'react';
// import { AiFillHeart, AiOutlineHeart, AiOutlineMessage } from 'react-icons/ai';
// import { formatDistanceToNowStrict } from 'date-fns';

import useCurrentUser from '@/hooks/useCurrentUser';
import useLoginModal from '@/hooks/useLoginModal';
// import useLike from '@/hooks/useLike';

// import Avatar from '../Avatar';
interface PostItemProps {
  data: Record<string, any>;
  userId?: string;
}

const PostItem: React.FC<PostItemProps> = ({ data = {}, userId }) => {
  const router = useRouter();
  const loginModal = useLoginModal();

  const { data: currentUser } = useCurrentUser();

  const goToUser = useCallback((event: any) => {
    event.stopPropagation();
    router.push(`/users/${data.user.id}`)
  }, [router, data.user.id]);

  const goToPost = useCallback((event: any) => {
    event.stopPropagation();
    router.push(`/posts/${data.id}`);
  }, [router, data.id]);

  const onLike = useCallback( async (event: any) => {
    event.stopPropagation();

    loginModal.onOpen();
  }, [])

  return (
    <></>
  )
}

export default PostItem;