import React from 'react';

export default interface IToast {
    message: string,
    setShow: React.Dispatch<React.SetStateAction<boolean>>,
    show: boolean
}