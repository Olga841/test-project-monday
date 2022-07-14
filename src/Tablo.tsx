import React from "react";
import './App.css'

type TabloPropsType = {
    tablo: number
}

export const Tablo = (props: TabloPropsType) => {
    return (
        <div className={props.tablo === 5 ? 'tablo_5' : 'tablo'}>{props.tablo}</div>
    )
}

type ValuePropseType = {
    title: string
}

export const Value = (props: ValuePropseType) => {
    return (
        <div className={'value'}>{props.title}
            <input />
        </div>
    )
}