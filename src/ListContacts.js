import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

class ListContacts extends Component {
  static protoTypes = {
    handleDelete: PropTypes.func.isRequired,
    contacts: PropTypes.array.isRequired,
    text: PropTypes.string.isRequired,
  };
  state = {
    query: "",
  };

  updateQuery = (query) => {
    this.setState(() => ({
      query: query.trim(),
    }));
  };
  showAll = () => {
    this.updateQuery("");
  };
  render() {
    const { contacts, handleDelete } = this.props;

    const showingContacts =
      this.state.query === ""
        ? contacts
        : contacts.filter((c) =>
            c.name.toLowerCase().includes(this.state.query.toLocaleLowerCase())
          );
    return (
      <div className="list-contacts">
        <div className="list-contacts-top">
          <input
            className="search-contacts"
            type="text"
            placeholder="Search Contacts"
            value={this.state.query}
            onChange={(event) => this.updateQuery(event.target.value)}
          />
          <Link className="add-contact" to="/addContact">
            add contact
          </Link>
        </div>
        {showingContacts.length !== contacts.length && (
          <div className="showing-contacts">
            <span>
              showing {showingContacts.length} of {contacts.length}
            </span>
            <button onClick={this.showAll}>show all</button>
          </div>
        )}
        <ol className="contact-list">
          {showingContacts.map((c) => (
            <li key={c.id} className="contact-list-item">
              <div
                className="contact-avatar"
                style={{ backgroundImage: `url(${c.avatarURL})` }}
              />
              <div className="contact-details">
                <p>{c.name}</p>
                <p>{c.handle}</p>
              </div>
              <button
                onClick={() => handleDelete(c)}
                className="contact-remove"
              >
                Remove
              </button>
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

export default ListContacts;
