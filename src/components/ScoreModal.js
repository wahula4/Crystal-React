import React from 'react';
import Modal from 'react-modal';

const ScoreModal = (props) => (
    <Modal
    // true boolean converts a string to true and undefined to false
        isOpen={!!props.selectedOption}
        onRequestClose={props.handleClearSelectedOption}
        contentLabel="Selected Option"
        closeTimeoutMS={200}
        className="modal"
    >
    </Modal>
);

export default ScoreModal;