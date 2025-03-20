import SearchIcon from '../icons/search';

export function Search() {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search"
        className="border-petroleum-100 text-petroleum-700 placeholder-petroleum-400 w-44 rounded-full border py-2 pr-9 pl-4 text-sm"
      />
      <SearchIcon className="fill-petroleum-400 absolute top-1/2 right-2.5 -translate-y-1/2" />
    </div>
  );
}
