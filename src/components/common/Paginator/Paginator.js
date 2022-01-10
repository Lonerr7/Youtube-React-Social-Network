import s from './Paginator.module.css';

const Paginator = ({
  totalUsersCount,
  pageLength,
  currentPage,
  onChangePage,
}) => {
  const pages = [];
  const totalPages = Math.ceil(totalUsersCount / pageLength);

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div>
      {pages.map((p) => (
        <span
          className={
            currentPage === p
              ? `${s.currentPage} ${s.pageNumber}`
              : s.pageNumber
          }
          onClick={() => {
            onChangePage(p);
          }}
          key={p}
        >
          {p}
        </span>
      ))}
    </div>
  );
};

export default Paginator;
