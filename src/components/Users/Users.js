// import Paginator from '../common/Paginator/Paginator';
import User from './User';
import Pagination from 'react-js-pagination';
import s from '../common/Paginator/Paginator.module.css';

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
      {/* <Paginator
        totalUsersCount={totalUsersCount}
        pageLength={pageLength}
        currentPage={currentPage}
        onChangePage={onChangePage}
      /> */}
      <Pagination
        pageRangeDisplayed={10}
        innerClass={s.paginationContainer}
        activeClass={s.currentPage}
        itemsCountPerPage={pageLength}
        totalItemsCount={totalUsersCount}
        activePage={currentPage}
        onChange={onChangePage}
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
