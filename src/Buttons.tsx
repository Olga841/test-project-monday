import React from "react";
import './App.css'

type ButtonPropsType = {
    title: string
    callback: () => void
    isDisabled: boolean
    active: boolean
}

export const Buttons = (props: ButtonPropsType) => {
    const callback = () => props.callback()
    const isDisabled = props.isDisabled

    return (
        <>
            <button
                disabled={isDisabled}
                onClick={callback}
                className={props.active ? 'button_active' : 'button'}
                >{props.title}
            </button>
        </>
    )
}