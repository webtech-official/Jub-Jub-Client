import React, { useState } from 'react'

const useModal = () => {
    const [isShow, setShow] = useState(false);
    const toggleModal = () => {
        setShow(!isShow)
    }
    return {isShow, toggleModal};
}

export default useModal
