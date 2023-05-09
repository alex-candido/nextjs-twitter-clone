interface UserHeroProps {
  userId: string;
}

const UserHero: React.FC<UserHeroProps> = ({ userId }) => {
  return (
    <><div>{userId}</div></>
  )
}

export default UserHero