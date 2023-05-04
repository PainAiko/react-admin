import { Admin, Resource, ListGuesser } from "react-admin";
import jsonServerProvider from "ra-data-json-server";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const AppAdmin = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="posts" options={{label: "Poste"}} list={ListGuesser} />
    <Resource name="comments" options={{label: "Commentaires"}} list={ListGuesser} />
    <Resource name="todos" options={{label: "Tache"}} list={ListGuesser} />
  </Admin>
);

export default AppAdmin;