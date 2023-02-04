import jsonServerProvider from 'ra-data-json-server';
import { Admin, Resource } from 'react-admin';
import { UserCreate, UserEdit, UserList } from './users';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

export function App() {
  return (
    <Admin dataProvider={dataProvider}>
      <Resource
        name="users"
        list={UserList}
        create={UserCreate}
        edit={UserEdit}
      />
    </Admin>
  );
}
