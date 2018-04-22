import * as React from 'react';
import Modal from './Modal';

type Props = {
    children: any | any[];
    buttonLabel: string;
}
type State = {
    showModal: boolean;
}

class ModalLauncher extends React.Component<Props, State> {
    constructor(props: any) {
        super(props);
        this.state = {
            showModal: false,
        };
    }

    handleToggleModal = () => {
        this.setState({ showModal: !this.state.showModal });
    }

    render() {
        const { children, buttonLabel } = this.props;
        return (
            <div>
                <button type="button" className="btn btn-primary" onClick={this.handleToggleModal}>{buttonLabel}</button>
                {this.state.showModal &&
                    <Modal onCloseRequest={this.handleToggleModal}>
                        {children}
                    </Modal>
                }
            </div>
        );
    }
}
export default ModalLauncher;
