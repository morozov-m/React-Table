import { useEffect, useState } from "react";
import Table from "./components/Table/Table";
import type { IFilterValue, ISort, IUser } from "./types/types";
import Modal from "./components/Modal/Modal";
import Filter from "./components/Filter/Filter";
import Pagination from "./components/Pagination/Pagination";
import Search from "./components/Search/Search";
import SearchInfo from "./components/Search/SearchInfo";

export default function App() {
   const [user, setUser] = useState<IUser | null>(null);
   const [isFilterOpen, setIsFilterOpen] = useState(false);
   const [filterValue, setFilterValue] = useState<IFilterValue>({
      value: '',
      id: '',
      keyUrl: ''
   })
   const [sort, setSort] = useState<ISort>({
      sortBy: null,
      order: null
   })
   const [page, setPage] = useState(1)
   const [users, setUsers] = useState<IUser[]>([])
   const [error, setError] = useState('')
   const [isLoading, setIsLoading] = useState(true)
   const [maxPage, setMaxPage] = useState(10)
   const [search, setSearch] = useState('')
   const [totalUsers, setTotalUsers] = useState(0)

   const getSearchValue = (text: string) => {
      setSearch(text)
      setPage(1)
      removeFilter()
      removeSort()
   }

   const removeSearch = () => {
      setSearch('')
      setPage(1)
   }

   const plusPage = () => {
      setPage(prev => prev + 1)
   }

   const minusPage = () => {
      setPage(prev => prev - 1)
   }

   const handleSort = (field: 'firstName' | 'lastName' | 'maidenName' | 'age' | 'gender' | 'phone' | null) => {
      removeFilter()
      removeSearch()
      setPage(1)
      setSort(prev => {
         if (prev.sortBy !== field) return { sortBy: field, order: "asc" }
         if (prev.order === "asc") return { sortBy: field, order: "desc" };
         if (prev.order === "desc") return { sortBy: null, order: null };

         return { sortBy: field, order: "asc" };
      });
   };

   const removeSort = () => {
      setSort({
         sortBy: null,
         order: null
      })
   }

   const changeFilter = (value: string, id: string, keyUrl: string) => {
      removeSort()
      removeSearch()
      setPage(1)
      setFilterValue({
         value,
         id,
         keyUrl
      })
   }

   const removeFilter = () => {
      setFilterValue({
         value: '',
         id: '',
         keyUrl: ''
      })
   }

   const toggleFilter = () => {
      setIsFilterOpen(prev => !prev)
   }

   const clickRow = (user: IUser) => {
      setUser(user);
   };

   const closeModal = () => {
      setUser(null)
   }

   useEffect(() => {
      const limit = 30
      const skip = (page - 1) * 30

      let URL = `https://dummyjson.com/users?limit=30&skip=${skip}`

      if (sort.order && sort.sortBy) {
         URL = `https://dummyjson.com/users?limit=30&skip=${skip}&sortBy=${sort.sortBy}&order=${sort.order}`
      }

      if (filterValue.value && filterValue.keyUrl) {
         URL = `https://dummyjson.com/users/filter?key=${filterValue.keyUrl}&value=${filterValue.value}&limit=30&skip=${skip}`
      }

      if (search) {
         URL = `https://dummyjson.com/users/search?q=${search}&limit=30&skip=${skip}`
      }
      setIsLoading(true)
      fetch(URL)
         .then(res => res.json())
         .then(json => {
            setUsers(json.users)
            setMaxPage(Math.ceil(json.total / limit))
            setTotalUsers(json.total)
            console.log(json)
         })
         .catch(err => {
            setError(err.message)
            console.error('Ошибка загрузки пользователей', err)
         })
         .finally(() => setIsLoading(false))
   }, [sort, filterValue, page, search])

   return (
      <div>
         <main>
            <Search getSearchValue={getSearchValue} />
            {search && <SearchInfo totalUsers={totalUsers} search={search} users={users} removeSearch={removeSearch} />}
            {users.length === 0 ? <></> : <Table isLoading={isLoading} error={error} users={users} handleSort={handleSort} sort={sort} onclick={clickRow} />}
            <Pagination maxPage={maxPage} page={page} plusPage={plusPage} minusPage={minusPage} />
            <Filter removeFilter={removeFilter} onclick={toggleFilter} onclickFilter={changeFilter} filterValue={filterValue} isOpen={isFilterOpen} />
            {user && <Modal user={user} onclick={closeModal} />}
         </main>
      </div>
   );
}
