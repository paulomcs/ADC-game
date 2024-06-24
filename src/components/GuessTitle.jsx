function GuessTitle(props) {
    const {text} = props
    return (
        <>
        <div className="flex me-3 items-center justify-center w-20 h-10 bg-gradient-to-b from-amber-600 to-amber-300 rounded-2xl" >
            {text}
        </div>
        </>
    )
}

export default GuessTitle