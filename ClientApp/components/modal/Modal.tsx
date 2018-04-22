import * as React from 'react';

type Props = {
    onCloseRequest: () => any;
    children: any | any[];
}

class Modal extends React.Component<Props, {}> {
    private modal: any;
    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
        document.addEventListener('click', this.handleOutsideClick, false);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleOutsideClick, false);
    }

    handleOutsideClick = (e: any) => {
        const { onCloseRequest } = this.props;

        // ignore clicks on the component itself
        if (this.modal.contains(e.target)) {
            return;
        }

        onCloseRequest();
        // if (!this.modal.contains(e.target)) {

        //     document.removeEventListener('click', this.handleOutsideClick, false);
        // }
    }

    render() {
        const { onCloseRequest, children } = this.props;
        return (
            <div className="my-modal">
                <div ref={node => { this.modal = node; }} className="my-modal-content">
                    <div className="my-modal-header">
                        <span className="close" onClick={onCloseRequest}>&times;</span>
                        <h4><strong>Modal Header</strong></h4>
                    </div>
                    <div className="my-modal-body">
                        {children}
                    </div>
                    <div className="my-modal-footer">
                        {/* <h3>Modal Footer</h3> */}
                        <button type="button" className={"btn btn-primary"} onClick={onCloseRequest}>Close me</button>
                    </div>
                </div>
            </div>
        );
    }
}
export default Modal;