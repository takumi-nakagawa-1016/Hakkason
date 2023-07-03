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
                    Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco deserunt aute id consequat veniam
                    incididunt duis in sint irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit officia tempor
                    esse quis. Sunt ad dolore quis aute consequat. Magna exercitation reprehenderit magna aute tempor cupidatat
                    consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit officia
                    eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt nisi consectetur esse laborum
                    eiusmod pariatur proident Lorem eiusmod et. Culpa deserunt nostrud ad veniam.
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
