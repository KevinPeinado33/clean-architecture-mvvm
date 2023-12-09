import { FC, memo } from 'react'

type typeVariantColors = 
    | 'primary'
    | 'danger'
    | 'success'
    | 'warning'

const bgColorButton = {
    primary: 'bg-blue-500 hover:bg-blue-400',
    danger: 'bg-red-500 hover:bg-red-400',
    success: '',
    warning: ''
}


interface Props {
    isDisabled? : boolean
    text        : string
    type?       : 'submit' | 'reset' | 'button'
    variant     : typeVariantColors
    onClick     : () => void
}

export const IconButton: FC < Props > = memo(({ 
    text, 
    variant,
    onClick,
    isDisabled = false,
    type = 'button',
}) => (
    <button
        type={ type }
        disabled = { isDisabled }
        onClick={ onClick }
        className={ `${ bgColorButton[variant] } px-3 py-2.5 disabled:bg-gray-300` }
    >
        { text }
    </button>
))