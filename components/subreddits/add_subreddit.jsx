import React from 'react';
import Modal from 'react-modal';
import ModalStyle from './ModalStyle';

class SubmitForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        title: this.props.title,
        public_description: this.props.publicDescription
      },
      modalOpen: false,
      modalType: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  openModal(modalType) {
    this.setState({
      data: {
        title: "",
      },
      modalOpen: true,
      modalType
    });
  }

  closeModal() {
    this.setState({
      modalOpen: false
    });
  }

  update(field) {
    return e => {
      e.preventDefault();
      if (field === 'title') {
        this.setState({data: { title: e.target.value, public_description: this.state.data.public_description }});
      } else {
        this.setState({data: { title: this.state.data.title, public_description: e.target.value }});
      }
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.props.ModalType === 'Add') {
      this.props.addSubreddit(this.state);
    } else {
      // Passing in idx of subreddit to edit and updated subreddit info
      this.props.editSubreddit(this.props.idx, this.state);
    }
    this.closeModal();
  }

  render() {
    const submitButton = this.props.ModalType === 'Add' ?
      <button onClick={this.openModal.bind(this, 'Add')}>Add Subreddit</button> :
      <button onClick={this.openModal.bind(this, 'Edit')}>Edit</button>;

    const header = this.props.ModalType === 'Add' ?
      <div className="subredditForm">New Subreddit Form</div> :
      <div className="subredditForm">Edit Subreddit Form</div>;

    return(
      <div>
        {submitButton}
        <Modal
          contentLabel="Modal"
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          style={ModalStyle}>
          {header}
          <form className="form">
            <label>
              <input
                className="title"
                type="text"
                value={this.state.data.title}
                placeholder="Title"
                onChange={this.update('title')}/>
            </label>
            <label>
              <input
                className="title"
                type="text"
                value={this.state.data.public_description}
                placeholder="Description"
                onChange={this.update('public_description')}/>
            </label>
            <button onClick={this.handleSubmit}>Submit</button>
          </form>
        </Modal>
      </div>
    );
  }
}

export default SubmitForm;
