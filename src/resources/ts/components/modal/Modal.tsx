export const Modal = ({ onClose }) => {
    return (
        <div className="modal-container">
            <div className="overlay" onClick={onClose} />
            <section className="modal-content">
                <h2 className="header">Modal title</h2>
                <button onClick={onClose} type="button" aria-label="閉じる" className="iconClose">
                    ×
                </button>
                <p className="contents">

                </p>
                <div className="buttonContainer">
                    <button onClick={onClose} type="button" className="button closeButton">
                        close
                    </button>
                    <button type="button" className="button nextButton">
                        Secondary Action
                    </button>
                </div>
            </section>
        </div>
    );
};
