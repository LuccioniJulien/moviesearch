import React from "react";
import { Toast } from 'react-bootstrap';
import IToast from "../../interfaces/toast";

const MyToast: React.FC<IToast> = ({ message, setShow, show }: IToast) => {

    const toggleShowA = () => setShow(!show);

    return (
        <Toast show={show} onClose={toggleShowA} style={{
            position: 'absolute',
            top: 8,
            right: 8,
        }}>
            <Toast.Header>
                <strong className="mr-auto">Uuups</strong>
            </Toast.Header>
            <Toast.Body>{message}</Toast.Body>
        </Toast>);
}

export default MyToast;