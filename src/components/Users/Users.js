import Paginator from '../common/Paginator/Paginator';
import User from './User';

const Users = ({
  users,
  followingInProgress,
  unfollowThunk,
  followThunk,
  totalUsersCount,
  pageLength,
  currentPage,
  onChangePage,
}) => {
  return (
    <div>
      <Paginator
        totalUsersCount={totalUsersCount}
        pageLength={pageLength}
        currentPage={currentPage}
        onChangePage={onChangePage}
      />
      {users.map((u) => {
        return (
          <User
            user={u}
            key={u.id}
            id={u.id}
            followingInProgress={followingInProgress}
            followThunk={followThunk}
            unfollowThunk={unfollowThunk}
          />
        );
      })}
    </div>
  );
};

export default Users;
