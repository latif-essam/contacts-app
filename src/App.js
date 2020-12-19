import React, { Component } from "react";
import ListContacts from "./ListContacts";
import * as ContactsAPI from "./utils/ContactsAPI";
import CreateContact from "./CreateContact";
import { Route } from "react-router-dom";

class App extends Component {
  state = {
    contacts: [],
  };
  componentDidMount() {
    ContactsAPI.getAll().then((contacts) => {
      this.setState(() => ({
        contacts,
      }));
    });
  }
  removeContact = (contact) => {
    this.setState((currentState) => ({
      contacts: currentState.contacts.filter((c) => c.id !== contact.id),
    }));
    console.log("lol", contact);
    ContactsAPI.remove(contact);
  };
  createContact = (contact) => {
    ContactsAPI.create(contact).then((contact) => {
      this.setState((currentState) => ({
        contacts: currentState.contacts.concat([contact]),
      }));
    });
  };
  render() {
    return (
      <>
        <Route
          path="/"
          exact
          render={() => (
            <ListContacts
              handleDelete={this.removeContact}
              contacts={this.state.contacts}
            />
          )}
        />
        <Route
          path="/addContact"
          render={({ history }) => (
            <CreateContact
              onCreateContact={(contact) => {
                this.createContact(contact);
                history.push("/");
              }}
            />
          )}
        />
      </>
    );
  }
}

export default App;
