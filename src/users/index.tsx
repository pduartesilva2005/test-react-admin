import {
  Datagrid,
  List,
  TextField,
  ResourceComponentInjectedProps,
  Create,
  SimpleForm,
  TextInput,
  Edit
} from 'react-admin';

export function UserList(props: ResourceComponentInjectedProps) {
  return (
    <List {...props}>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <TextField source="name" />
        <TextField source="username" />
      </Datagrid>
    </List>
  );
}

export function UserCreate(props: ResourceComponentInjectedProps) {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput source="id" disabled />
        <TextInput source="name" />
        <TextInput source="username" />
      </SimpleForm>
    </Create>
  );
}

export function UserEdit(props: ResourceComponentInjectedProps) {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput source="id" disabled />
        <TextInput source="name" />
        <TextInput source="username" />
      </SimpleForm>
    </Edit>
  );
}
